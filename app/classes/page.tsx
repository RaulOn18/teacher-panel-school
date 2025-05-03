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
  IconEdit,
  IconMail,
  IconNote,
  IconPhone,
  IconPlus,
  IconTrash,
  IconUsers,
} from "@tabler/icons-react";
import { Filter, Icon, Search } from "lucide-react";
import { useState } from "react";
import { ScoreDistribution } from "./scores-distribution";
import { DaftarSiswaDataTable } from "./daftar-siswa-data-table";

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = [
    {
      id: "1",
      name: "X IPA 2",
      subject: "Matematika",
      schedule: "Senin, 07:30 - 09:00",
      totalStudents: 32,
      averageGrade: 78,
      attendanceRate: 92,
      students: [
        { id: "1", name: "Ahmad Rizki", attendance: 85, grade: 82 },
        { id: "2", name: "Siti Nurhaliza", attendance: 92, grade: 90 },
        { id: "3", name: "Budi Santoso", attendance: 78, grade: 75 },
        { id: "4", name: "Dewi Lestari", attendance: 88, grade: 85 },
        { id: "5", name: "Eko Prasetyo", attendance: 90, grade: 78 },
      ],
      gradeDistribution: [
        { grade: "A", count: 8 },
        { grade: "B", count: 12 },
        { grade: "C", count: 9 },
        { grade: "D", count: 3 },
        { grade: "E", count: 0 },
      ],
      attendanceData: [
        { name: "Hadir", value: 92, color: "#10b981" },
        { name: "Izin", value: 3, color: "#f59e0b" },
        { name: "Sakit", value: 4, color: "#3b82f6" },
        { name: "Absen", value: 1, color: "#ef4444" },
      ],
      materials: [
        {
          id: "1",
          title: "Persamaan Kuadrat",
          type: "PDF",
          date: "10 April 2024",
        },
        {
          id: "2",
          title: "Latihan Soal Bab 5",
          type: "DOCX",
          date: "15 April 2024",
        },
        {
          id: "3",
          title: "Presentasi Fungsi",
          type: "PPTX",
          date: "20 April 2024",
        },
      ],
      assignments: [
        {
          id: "1",
          title: "Tugas 1: Persamaan Linear",
          dueDate: "12 April 2024",
          status: "Selesai",
        },
        {
          id: "2",
          title: "Tugas 2: Persamaan Kuadrat",
          dueDate: "19 April 2024",
          status: "Selesai",
        },
        { id: "3", title: "UTS", dueDate: "25 April 2024", status: "Selesai" },
        {
          id: "4",
          title: "Tugas 3: Fungsi",
          dueDate: "5 Mei 2024",
          status: "Aktif",
        },
      ],
    },
    {
      id: "2",
      name: "XI IPA 1",
      subject: "Fisika",
      schedule: "Selasa, 09:15 - 10:45",
      totalStudents: 30,
      averageGrade: 75,
      attendanceRate: 88,
      students: [
        { id: "6", name: "Fajar Nugroho", attendance: 80, grade: 78 },
        { id: "7", name: "Indah Permata", attendance: 85, grade: 82 },
        { id: "8", name: "Joko Widodo", attendance: 75, grade: 70 },
        { id: "9", name: "Kartika Sari", attendance: 90, grade: 85 },
        { id: "10", name: "Lukman Hakim", attendance: 82, grade: 76 },
      ],
      gradeDistribution: [
        { grade: "A", count: 5 },
        { grade: "B", count: 10 },
        { grade: "C", count: 12 },
        { grade: "D", count: 3 },
        { grade: "E", count: 0 },
      ],
      attendanceData: [
        { name: "Hadir", value: 88, color: "#10b981" },
        { name: "Izin", value: 4, color: "#f59e0b" },
        { name: "Sakit", value: 5, color: "#3b82f6" },
        { name: "Absen", value: 3, color: "#ef4444" },
      ],
      materials: [
        { id: "4", title: "Hukum Newton", type: "PDF", date: "5 April 2024" },
        {
          id: "5",
          title: "Latihan Soal Mekanika",
          type: "DOCX",
          date: "12 April 2024",
        },
        {
          id: "6",
          title: "Presentasi Energi",
          type: "PPTX",
          date: "18 April 2024",
        },
      ],
      assignments: [
        {
          id: "5",
          title: "Tugas 1: Hukum Newton",
          dueDate: "10 April 2024",
          status: "Selesai",
        },
        {
          id: "6",
          title: "Tugas 2: Energi",
          dueDate: "17 April 2024",
          status: "Selesai",
        },
        { id: "7", title: "UTS", dueDate: "24 April 2024", status: "Selesai" },
        {
          id: "8",
          title: "Tugas 3: Momentum",
          dueDate: "8 Mei 2024",
          status: "Aktif",
        },
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
              Manajemen Kelas
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
                              <IconUsers className="w-4 h-4 text-muted-foreground" />
                              {classData.totalStudents} Siswa
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
                    <DropdownMenu>
                      <DropdownMenuTrigger className="focus:outline-none">
                        <div className="flex flex-row gap-2 items-center border rounded-md px-3 py-1 hover:cursor-pointer hover:bg-muted text-sm">
                          Aksi
                          <IconChevronDown className="w-4 h-4" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <IconEdit className="w-4 h-4" /> Edit Kelas
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconPlus className="w-4 h-4" /> Tambah Siswa
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconNote className="w-4 h-4" /> Tambah Materi
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="!text-red-500">
                          <IconTrash className="w-4 h-4 text-red-500" />
                          Hapus Kelas
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="px-4">
                  <Tabs defaultValue="students-list">
                    <TabsList className="w-full mb-2 px-1">
                      <TabsTrigger value="students-list">
                        Daftar Siswa
                      </TabsTrigger>
                      <TabsTrigger value="schedule">Jadwal</TabsTrigger>
                      <TabsTrigger value="material">Materi</TabsTrigger>
                      <TabsTrigger value="task">Tugas</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="students-list"
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 w-full gap-x-4">
                        <Card className="w-full rounded-md">
                          <CardHeader>
                            <CardTitle>Statistik Kelas</CardTitle>
                            <CardDescription>
                              Ringkasan performa kelas
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-y-4">
                              <div>
                                <h1 className="text-gray-500 pb-1">
                                  Total Siswa
                                </h1>
                                <h2 className="font-bold text-2xl">
                                  {classData?.totalStudents}
                                </h2>
                              </div>
                              <div>
                                <h1 className="text-gray-500 pb-1">
                                  Rata-rata Nilai
                                </h1>
                                <h2 className="font-bold text-2xl">
                                  {classData?.averageGrade}
                                </h2>
                              </div>
                              <div>
                                <h1 className="text-gray-500 pb-1">
                                  Tingkat Kehadiran
                                </h1>
                                <h2 className="font-bold text-2xl">
                                  {classData?.attendanceRate}%
                                </h2>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <ScoreDistribution
                          chartData={classData!.gradeDistribution}
                        />
                      </div>
                      <Card className="w-full rounded-md">
                        <CardHeader className="flex justify-between">
                          <div>
                            <CardTitle>Daftar Siswa</CardTitle>
                            <CardDescription></CardDescription>
                            {classData?.totalStudents} siswa terdaftar
                          </div>
                          <div className="flex gap-2">
                            <Input type="search" placeholder="Cari siswa" />
                            <Button variant={"outline"}>
                              <IconPlus className="w-4 h-4" />
                              Tambah Siswa
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <DaftarSiswaDataTable data={classData!.students} />
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="schedule">
                      <div>Jadwal</div>
                    </TabsContent>
                    <TabsContent value="material">
                      <div>Materi</div>
                    </TabsContent>
                    <TabsContent value="task">
                      <div>Tugas</div>
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
