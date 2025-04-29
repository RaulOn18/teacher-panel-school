import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Book, File, Users, Verified } from "lucide-react"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-medium">Total Siswa</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            156
          </CardTitle>
          <CardAction>
            <Users className="size-4" />
          </CardAction>
          <div className="text-sm text-muted-foreground">Dari 5 kelas yang diampu</div>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-medium">Kehadiran Hari ini</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            94.87%
          </CardTitle>
          <CardAction>
            <Verified className="size-4" />
          </CardAction>
          <div className="text-sm text-muted-foreground">8 Siswa tidak hadir</div>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-medium">Tugas Belum Dinilai</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            8
          </CardTitle>
          <CardAction>
            <File className="size-4" />
          </CardAction>
          <div className="text-sm text-muted-foreground">Perlu Penilaian</div>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-medium">Jadwal Hari Ini</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            3
          </CardTitle>
          <CardAction>
            <Book className="size-4" />
          </CardAction>
          <div className="text-muted-foreground text-sm">Pelajaran yang akan diampu</div>
        </CardHeader>
      </Card>
    </div>
  )
}
