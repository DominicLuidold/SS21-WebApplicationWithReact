import { autorun, makeAutoObservable, runInAction } from "mobx";
import { Tab } from "../App";

export type GiphyGif = {
    title: string;
    url: string;
}

const apiKey = '<giphy-api-key>';

export class GiphyStore {
    private _gifs: GiphyGif[] = [];
    private _currentPage: number = 1;
    private _pageCount: number = 1;
    private _loading: boolean = false;
    private _error?: string;
    private _searchTerm: string = "";
    private _currentTab: Tab = 'Trending';

    constructor() {
        makeAutoObservable(this);
    }

    public setSearchTerm(searchTerm: string): void {
        this._searchTerm = searchTerm;
    }

    public setPage(page: number): void {
        this._currentPage = page;
    }

    public setCurrentView(tab: Tab): void {
        this.reset();
        this._currentTab = tab;
    }

    public destroy(): void {
        this.giphyAutoRun();
    }

    public get gifs(): GiphyGif[] {
        return this._gifs;
    }

    public get currentPage(): number {
        return this._currentPage;
    }
    
    public get pageCount(): number {
        return this._pageCount;
    }

    public get loading(): boolean {
        return this._loading;
    }

    public get error(): string | undefined {
        return this._error;
    }

    private giphyAutoRun = autorun(() => {
        this.getGiphyData();
    });

    private reset(): void {
        this._gifs = [];
        this._currentPage = 1;
        this._pageCount = 1;
        this._loading = false;
        this._error = undefined;
        this._searchTerm = "";
    }

    private getGiphyData(): void {
        const baseUrl = 'https://api.giphy.com/v1/gifs';
        const urlParameter = `?api_key=${apiKey}&limit=25&offset=${ (this.currentPage - 1) * 25 }`; // default Giphy limit is 25
        let url = baseUrl;

        if (this._currentTab === 'Search' && this._searchTerm.length < 3) {
            return;
         } else if (this._currentTab === 'Search' && this._searchTerm.length >= 3) {
            url += `/search${urlParameter}&q=${this._searchTerm}`;
        } else if (this._currentTab === 'Trending') {
            url += `/trending${urlParameter}`;
        }

        runInAction(() => this._loading = true);

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then(json => {
            runInAction(() => {
                this._gifs = [];
                for (let i = 0; i < json.data.length; i++) {
                    const currentGif = json.data[i];
                    this._gifs.push({
                        title: currentGif.title,
                        url: currentGif.images.fixed_width.url
                    });
                }

                const pageCount = json.pagination.total_count as number;
                if (pageCount % 25 > 0) {
                    this._pageCount =  Math.floor(pageCount / 25) + 1;
                } else {
                    this._pageCount =  Math.floor(pageCount / 25);
                }

                this._loading = false;
            });
        })
        .catch(error => {
            runInAction(() => {
                this.reset();
                this._loading = false;
                this._error = error.toString();
                console.log(error);
            });
        })
    }
}
