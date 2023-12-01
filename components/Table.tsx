'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MovieInterface } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
//@ts-ignore
import { isEmpty } from 'lodash';

interface MovieProps {
    data: MovieInterface[];
}

export const TableDemo: React.FC<MovieProps> = ({ data }) => {

    if (isEmpty(data)) {
        return null;
    }

    return (
        <Table>
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Id</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="w-20">description</TableHead>
                    <TableHead className="">thumbnailUrl</TableHead>
                    <TableHead>videoUrl</TableHead>
                    <TableHead>duration</TableHead>
                    <TableHead>genre</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((movie) => (
                    <TableRow key={movie.id}>
                        <TableCell className="">
                            <div className="w-20 truncate overflow-hidden ">
                                {movie.id}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="w-20 truncate overflow-hidden ">
                                {movie.title}
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="w-20 truncate overflow-hidden ">
                                {movie.description}
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="w-20 truncate overflow-hidden ">
                                {movie.thumbnailUrl}
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="w-20 truncate overflow-hidden ">
                                {movie.videoUrl}
                            </div>
                        </TableCell>
                        <TableCell className="">
                            {movie.duration}
                        </TableCell>
                        <TableCell className="">
                            {movie.genre}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
               
            </TableFooter>
        </Table>
    )
}
