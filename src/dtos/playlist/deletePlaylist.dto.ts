import z from "zod"
import {CreatePlaylistInputDTO} from "./createPlaylist.dto";

export interface DeletePlaylistInputDTO {
  token: string
  idToDelete: string
}

export type DeletePlaylistOutputDTO = undefined

export const DeletePlaylistSchema = z.object({
  token: z.string().min(1),
  idToDelete: z.string().min(1),
}).transform((data) => data as DeletePlaylistInputDTO)
