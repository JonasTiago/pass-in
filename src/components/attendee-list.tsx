import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"; 
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList(){
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold" >Participantes</h1>
                <div className="px-3 w-72 py-1.5 border
                border-white/10  rounded-lg flex items-center gap-3">
                    <Search className="size-4 text-emerald-300"/>
                    <input 
                        type="text" 
                        className="bg-transparent flex-1 outline-none gap-3 h-auto border-0 p-0 text-sm"  
                        placeholder="Buscar participante..." 
                    />
                </div>
            </div>
            <Table>
                    <thead>
                        <tr className="border-b border-white/10">
                            <TableHeader  style={{ width: 64}} >
                                <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10" name="" id="" />
                            </TableHeader>
                            <TableHeader >Código</TableHeader>
                            <TableHeader >Participante</TableHeader>
                            <TableHeader >Data de inscrição</TableHeader>
                            <TableHeader >Data do check-in</TableHeader>
                            <TableHeader style={{ width: 64}} className="py-3 px-4 text-sm font-semibold text-left" ></TableHeader>
                        </tr>
                    </thead>

                    <tbody>
                        {  Array.from({length: 5}).map((_,i) => {
                            return (
                                <TableRow key={i} >
                                    <TableCell>
                                        <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10" name="" id="" />
                                    </TableCell>
                                    <TableCell>52716</ TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">jonas Tiago</span>
                                            <span>jonastiago@gmail.com</span>
                                        </div>
                                    </ TableCell>
                                    <TableCell>
                                        <span>7 day ago</span>
                                    </ TableCell>
                                    <TableCell>
                                        <span>7 day ago</span>
                                    </ TableCell>
                                    <TableCell>
                                        <IconButton transparent>
                                            <MoreHorizontal className="size-4"/>
                                        </ IconButton>
                                    </ TableCell>
                                </TableRow >
                            )
                        }) }
                    </tbody>

                    <tfoot>
                        <tr>
                            <TableCell colSpan={3}>
                                Mostrando 10 de 228 itens
                            </TableCell>
                            <TableCell colSpan={3} className="text-right">
                                <div className="inline-flex items-center gap-8">
                                    <span>pagina 1 de 22</span>
                                    <div className="flex gap-1.5">
                                        <IconButton >
                                            <ChevronsLeft className="size-4"/>
                                        </IconButton>
                                        <IconButton >
                                            <ChevronLeft className="size-4"/>
                                        </IconButton>
                                        <IconButton >
                                            <ChevronRight className="size-4"/>
                                        </IconButton>
                                        <IconButton >
                                            <ChevronsRight className="size-4"/>
                                        </IconButton>
                                    </div>

                                </div>
                            </TableCell>
                        </tr>
                    </tfoot>
            </ Table>
        </div>
    )
}