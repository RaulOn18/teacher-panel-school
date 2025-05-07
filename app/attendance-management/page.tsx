"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { CustomListTile } from "@/components/custom-list-tile";
import { SiteHeader } from "@/components/site-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconBook,
  IconCalendar,
  IconCalendarHeart,
  IconCancel,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconDownload,
  IconEdit,
  IconMail,
  IconNote,
  IconPhone,
  IconPlus,
  IconTrash,
  IconUsers,
} from "@tabler/icons-react";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  Filter,
  Icon,
  Plus,
  Search,
  XCircle,
} from "lucide-react";
import { useState } from "react";
// import { ScoreDistribution } from "./scores-distribution";
// import { DaftarSiswaDataTable } from "./daftar-siswa-data-table";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Tooltip } from "@/components/ui/tooltip";
import { TodayAttendance } from "./today-attendance";

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = [
    {
      id: "1",
      name: "X IPA 2",
      subject: "Matematika",
      schedule: "Senin, 07:30 - 09:00",
      totalStudents: 32,
      attendanceRate: 92,
      attendanceData: [
        { name: "Hadir", value: 92, fill: "#10b981" },
        { name: "Izin", value: 3, fill: "#f59e0b" },
        { name: "Sakit", value: 4, fill: "#3b82f6" },
        { name: "Absen", value: 1, fill: "#ef4444" },
      ],
      students: [
        { id: "1", name: "Ahmad Rizki", status: "Hadir" },
        { id: "2", name: "Siti Nurhaliza", status: "Hadir" },
        { id: "3", name: "Budi Santoso", status: "Sakit" },
        { id: "4", name: "Dewi Lestari", status: "Hadir" },
        { id: "5", name: "Eko Prasetyo", status: "Izin" },
      ],
      recentAttendance: [
        { date: "1 Mei 2024", present: 30, absent: 2 },
        { date: "24 April 2024", present: 28, absent: 4 },
        { date: "22 April 2024", present: 29, absent: 3 },
        { date: "17 April 2024", present: 31, absent: 1 },
        { date: "15 April 2024", present: 30, absent: 2 },
      ],
    },
    {
      id: "2",
      name: "XI IPA 1",
      subject: "Fisika",
      schedule: "Selasa, 09:15 - 10:45",
      totalStudents: 30,
      attendanceRate: 88,
      attendanceData: [
        { name: "Hadir", value: 88, fill: "#10b981" },
        { name: "Izin", value: 4, fill: "#f59e0b" },
        { name: "Sakit", value: 5, fill: "#3b82f6" },
        { name: "Absen", value: 3, fill: "#ef4444" },
      ],
      students: [
        { id: "6", name: "Fajar Nugroho", status: "Hadir" },
        { id: "7", name: "Indah Permata", status: "Hadir" },
        { id: "8", name: "Joko Widodo", status: "Absen" },
        { id: "9", name: "Kartika Sari", status: "Hadir" },
        { id: "10", name: "Lukman Hakim", status: "Hadir" },
      ],
      recentAttendance: [
        { date: "2 Mei 2024", present: 27, absent: 3 },
        { date: "25 April 2024", present: 26, absent: 4 },
        { date: "23 April 2024", present: 28, absent: 2 },
        { date: "18 April 2024", present: 25, absent: 5 },
        { date: "16 April 2024", present: 27, absent: 3 },
      ],
    },
  ];
  const classData = selectedClass
    ? classes.find((c) => c.id === selectedClass)
    : classes[0];

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight">
              Manajemen Kehadiran
            </h1>
          </div>
        </SiteHeader>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex lg:flex-row flex-col gap-2 px-2 py-4 md:gap-4 md:py-6">
              <div className="w-full flex-1 flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Cari Kelas..."
                      className="pl-8"
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => {}}
                        size={"icon"}
                      >
                        <Filter className="w-4 h-4" />
                        <span className="sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>
                        Filter Mata Pelajaran
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Semua Mata Pelajaran</DropdownMenuItem>
                      <DropdownMenuItem>Matematika</DropdownMenuItem>
                      <DropdownMenuItem>Fisika</DropdownMenuItem>
                      <DropdownMenuItem>Kimia</DropdownMenuItem>
                      <DropdownMenuItem>Biologi</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Card className="rounded-md pb-0">
                  <CardHeader>
                    <CardTitle>Daftar Kelas</CardTitle>
                    <CardDescription>Kelas yang diampu</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 max-h-[500px]">
                    {classes.map((classData) => (
                      <CustomListTile
                        key={classData?.id}
                        className={`px-6 ${
                          classData.id === (selectedClass || classes[0].id)
                            ? "bg-muted"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedClass(classData.id);
                        }}
                        title={classData.name}
                        leading={
                          <Avatar>
                            <AvatarImage src={""} />
                            <AvatarFallback
                              className={`${
                                selectedClass != classData.id
                                  ? "bg-muted"
                                  : "bg-white"
                              }`}
                            >
                              <IconBook className="w-4 h-4" />
                            </AvatarFallback>
                          </Avatar>
                        }
                        subtitle={
                          <div className="text-muted-foreground text-sm flex flex-col gap-1 pt-1">
                            <div className="flex gap-2 items-center text-sm">
                              <IconCalendar className="w-4 h-4 text-muted-foreground" />
                              {classData.schedule}
                            </div>
                            <div className="flex gap-2 items-center text-sm">
                              <IconClock className="w-4 h-4 text-muted-foreground" />
                              Kehadiran {classData.attendanceRate}%
                            </div>
                          </div>
                        }
                      />
                    ))}
                  </CardContent>
                </Card>
              </div>
              <Card className="w-full flex-2 rounded-md">
                <CardHeader>
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex gap-4 items-center">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={""} className="w-12 h-12" />
                        <AvatarFallback>
                          {classData?.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {classData?.name}
                        </CardTitle>
                        <CardDescription>
                          {classData?.totalStudents}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => {}}
                        variant={"outline"}
                        size={"sm"}
                      >
                        <IconDownload /> Ekspor
                      </Button>
                      <Button onClick={() => {}} size={"sm"}>
                        <IconPlus /> Rekam Kehadiran
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-4">
                  <Tabs defaultValue="today">
                    <TabsList>
                      <TabsTrigger value="today">Hari Ini</TabsTrigger>
                      <TabsTrigger value="history">Riwayat</TabsTrigger>
                      <TabsTrigger value="report">Laporan</TabsTrigger>
                    </TabsList>
                    <TabsContent value="today" className="flex flex-col gap-2">
                      <div className="flex flex-col lg:flex-row gap-2">
                        <TodayAttendance data={classData!.attendanceData} />
                        <Card className="flex-1 rounded-md">
                          <CardHeader>
                            <CardTitle>Ringkasan Kehadiran</CardTitle>
                            <CardDescription>
                              Status kehadiran siswa
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center gap-2">
                                <IconCheck className="w-6 h-6 text-green-500" />
                                <div>
                                  <h2 className="text-md">Hadir</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {classData?.attendanceData[0].value}%
                                  </h2>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <IconCancel className="w-6 h-6 text-red-500" />
                                <div>
                                  <h2 className="text-md">Absen</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {classData?.attendanceData[1].value}%
                                  </h2>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <IconCalendarHeart className="w-6 h-6 text-blue-500" />
                                <div>
                                  <h2 className="text-md">Sakit</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {classData?.attendanceData[2].value}%
                                  </h2>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <IconNote className="w-6 h-6 text-yellow-500" />
                                <div>
                                  <h2 className="text-md">Izin</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {classData?.attendanceData[3].value}%
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      <Card className="rounded-md">
                        <CardHeader className="flex justify-between">
                          <div>
                            <CardTitle>Daftar Kehadiran</CardTitle>
                            <CardDescription>
                              Status kehadiran siswa hari ini
                            </CardDescription>
                          </div>
                          <div>
                            <div className="relative w-full">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="text"
                                placeholder="Cari Kelas..."
                                className="pl-8"
                              />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="rounded-md border">
                            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
                              <div className="col-span-6">Nama</div>
                              <div className="col-span-5">Status</div>
                              <div className="col-span-1"></div>
                            </div>
                            {classData?.students.map((student) => (
                              <div
                                key={student.id}
                                className="grid grid-cols-12 gap-4 p-4 items-center border-b last:border-0"
                              >
                                <div className="col-span-6 flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage
                                      src={`/placeholder.svg?height=32&width=32`}
                                      alt={student.name}
                                    />
                                    <AvatarFallback>
                                      {student.name.substring(0, 2)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span>{student.name}</span>
                                </div>
                                <div className="col-span-5">
                                  <Badge
                                    variant="outline"
                                    className={
                                      student.status === "Hadir"
                                        ? "bg-green-50 text-green-700"
                                        : student.status === "Sakit"
                                        ? "bg-blue-50 text-blue-700"
                                        : student.status === "Izin"
                                        ? "bg-yellow-50 text-yellow-700"
                                        : "bg-red-50 text-red-700"
                                    }
                                  >
                                    {student.status}
                                  </Badge>
                                </div>
                                <div className="col-span-1 text-right">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <ChevronDown className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>
                                        Ubah ke Hadir
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Ubah ke Sakit
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Ubah ke Izin
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Ubah ke Absen
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="history">
                      <Card className="rounded-md">
                        <CardHeader>
                          <CardTitle>Riwayat Kehadiran</CardTitle>
                          <CardDescription>
                            Rekaman kehadiran 5 pertemuan terakhir
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="rounded-md border">
                            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
                              <div className="col-span-4">Tanggal</div>
                              <div className="col-span-4">Hadir</div>
                              <div className="col-span-3">Tidak Hadir</div>
                              <div className="col-span-1"></div>
                            </div>
                            {classData?.recentAttendance.map(
                              (record, index) => (
                                <div
                                  key={index}
                                  className="grid grid-cols-12 gap-4 p-4 items-center border-b last:border-0"
                                >
                                  <div className="col-span-4 flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{record.date}</span>
                                  </div>
                                  <div className="col-span-4">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                                      <span>{record.present} siswa</span>
                                    </div>
                                  </div>
                                  <div className="col-span-3">
                                    <div className="flex items-center gap-2">
                                      <XCircle className="h-4 w-4 text-red-500" />
                                      <span>{record.absent} siswa</span>
                                    </div>
                                  </div>
                                  <div className="col-span-1 text-right">
                                    <Button variant="ghost" size="icon">
                                      <ChevronDown className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="report">
                      <Card>
                        <CardHeader>
                          <CardTitle>Laporan Kehadiran</CardTitle>
                          <CardDescription>
                            Laporan kehadiran semester ini
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="rounded-lg border p-4">
                                <div className="font-medium">
                                  Laporan Bulanan
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Laporan kehadiran bulanan untuk{" "}
                                  {classData?.name}
                                </p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-4"
                                >
                                  <Download className="mr-2 h-4 w-4" />
                                  Unduh PDF
                                </Button>
                              </div>
                              <div className="rounded-lg border p-4">
                                <div className="font-medium">
                                  Laporan Semester
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  Laporan kehadiran semester untuk{" "}
                                  {classData?.name}
                                </p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-4"
                                >
                                  <Download className="mr-2 h-4 w-4" />
                                  Unduh PDF
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
