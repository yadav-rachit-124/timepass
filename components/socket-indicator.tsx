"use client"

import { Wifi } from "lucide-react"
import { useSocket } from "./providers/socket-provider"
import { Badge } from "./ui/badge"

export const SocketIndicator = () => {
    const {isConnected} = useSocket()

    if(!isConnected) {
        return(
            <Badge
                variant="outline"
                className="text-yellow-600 border-none"
            >
                <Wifi />
            </Badge>
        )
    }

    return(
        <Badge
            variant="outline"
            className="text-green-600 border-none"
        >
            <Wifi />
        </Badge>
    )
}