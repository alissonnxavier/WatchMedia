"use client"

import { MovieInterface } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<MovieInterface>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "thumbnailUrl",
        header: "ThumbnailUrl",
    },
    {
        accessorKey: "videoUrl",
        header: "VideoUrl",
    },
    {
        accessorKey: "duration",
        header: "Duration",
    },
    {
        accessorKey: "genre",
        header: "Genre",
    },
]
