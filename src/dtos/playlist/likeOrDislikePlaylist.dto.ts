import z from "zod"
import {CreatePlaylistInputDTO} from "./createPlaylist.dto";

export interface LikeOrDislikePlaylistInputDTO {
  token: string
  playlistId: string
  like: boolean
}

export type LikeOrDislikePlaylistOutputDTO = undefined

export const LikeOrDislikePlaylistSchema = z.object({
  token: z.string().min(1),
  playlistId: z.string().min(1),
  like: z.boolean(),
}).transform((data) => data as LikeOrDislikePlaylistInputDTO)
