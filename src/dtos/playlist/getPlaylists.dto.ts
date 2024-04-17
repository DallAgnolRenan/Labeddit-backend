import z from "zod"
import {PlaylistModel} from "../../models/Playlist"

export interface GetPlaylistsInputDTO {
  token: string
}

export type GetPlaylistsOutputDTO = PlaylistModel[]

// export interface GetPlaylistsOutputDTO {
//   id: string
//   name: string
//   likes: string
//   dislikes: string
//   createdAt: string
//   updatedAt: string
//   creator: {
//     id: string
//     name: string
//   }
// }

export const GetPlaylistsSchema = z.object({
  token: z.string().min(1),
})
