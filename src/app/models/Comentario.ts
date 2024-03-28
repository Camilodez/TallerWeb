export interface Comentario {
    id: number
    body: string
    postId: number
    user:{
        username: string
    }
}