import z from "zod"

export interface EditPlaylistInputDTO {
  token: string
  name: string
  idToEdit: string
}

export type EditPlaylistOutputDTO = undefined

export const EditPlaylistSchema = z
  .object({
    token: z.string(),
    name: z.string(),
    idToEdit: z.string(),
  })
  .transform((data) => data as EditPlaylistInputDTO)
