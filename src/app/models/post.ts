export interface Post {
    hits?: Array<hitsData>
}

export interface hitsData {
    title?: string,
    url?: string,
    created_at?: string,
    author?: string
}