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
  IconEdit,
  IconMail,
  IconNote,
  IconPhone,
} from "@tabler/icons-react";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { NilaiChart } from "./nilai-chart";

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const students = [
    {
      id: "1",
      name: "Ahmad Rizki",
      nis: "25000001",
      class: "X IPA 2",
      avatar: "https://github.com/shadcn.png",
      gender: "Laki-laki",
      parentName: "Budi Santoso",
      parentPhone: "081234567890",
      parentEmail: "budi@example.com",
      attendance: {
        present: 85,
        sick: 5,
        permission: 8,
        absent: 2,
      },
      grades: [
        { subject: "Tugas 1", score: 85 },
        { subject: "Tugas 2", score: 78 },
        { subject: "UTS", score: 82 },
        { subject: "Tugas 3", score: 90 },
        { subject: "Tugas 4", score: 88 },
      ],
      gradeHistory: [
        { month: "Jan", score: 78 },
        { month: "Feb", score: 80 },
        { month: "Mar", score: 75 },
        { month: "Apr", score: 82 },
        { month: "Mei", score: 85 },
        { month: "Jun", score: 88 },
      ],
      attendanceHistory: [
        { date: "1 Mei", status: "Hadir" },
        { date: "2 Mei", status: "Hadir" },
        { date: "3 Mei", status: "Sakit" },
        { date: "4 Mei", status: "Hadir" },
        { date: "5 Mei", status: "Hadir" },
      ],
      notes: [
        {
          id: "1",
          date: "10 April 2024",
          title: "Konsultasi Akademik",
          content: "Ahmad menunjukkan peningkatan dalam pelajaran matematika.",
        },
        {
          id: "2",
          date: "25 Maret 2024",
          title: "Perilaku di Kelas",
          content:
            "Ahmad aktif bertanya dan berpartisipasi dalam diskusi kelas.",
        },
      ],
    },
    {
      id: "2",
      name: "Siti Nurhaliza",
      nis: "25000002",
      class: "X IPA 2",
      gender: "Perempuan",
      parentName: "Dewi Susanti",
      avatar: "https://github.com/shadcn.png",
      parentPhone: "081234567891",
      parentEmail: "dewi@example.com",
      attendance: {
        present: 92,
        sick: 3,
        permission: 5,
        absent: 0,
      },
      grades: [
        { subject: "Tugas 1", score: 90 },
        { subject: "Tugas 2", score: 85 },
        { subject: "UTS", score: 88 },
        { subject: "Tugas 3", score: 92 },
        { subject: "Tugas 4", score: 95 },
      ],
      gradeHistory: [
        { month: "Jan", score: 85 },
        { month: "Feb", score: 87 },
        { month: "Mar", score: 88 },
        { month: "Apr", score: 90 },
        { month: "Mei", score: 92 },
        { month: "Jun", score: 95 },
      ],
      attendanceHistory: [
        { date: "1 Mei", status: "Hadir" },
        { date: "2 Mei", status: "Hadir" },
        { date: "3 Mei", status: "Hadir" },
        { date: "4 Mei", status: "Hadir" },
        { date: "5 Mei", status: "Izin" },
      ],
      notes: [
        {
          id: "1",
          date: "15 April 2024",
          title: "Prestasi Akademik",
          content: "Siti mendapatkan nilai tertinggi pada ujian matematika.",
        },
        {
          id: "2",
          date: "20 Maret 2024",
          title: "Keaktifan di Kelas",
          content:
            "Siti sangat aktif dalam kegiatan diskusi kelompok dan sering membantu teman-temannya.",
        },
      ],
    },
    {
      id: "3",
      name: "Budi Santoso",
      nis: "25000003",
      class: "X IPA 2",
      gender: "Laki-laki",
      avatar: "https://github.com/shadcn.png",
      parentName: "Agus Widodo",
      parentPhone: "081234567892",
      parentEmail: "agus@example.com",
      attendance: {
        present: 78,
        sick: 10,
        permission: 7,
        absent: 5,
      },
      grades: [
        { subject: "Tugas 1", score: 75 },
        { subject: "Tugas 2", score: 70 },
        { subject: "UTS", score: 68 },
        { subject: "Tugas 3", score: 72 },
        { subject: "Tugas 4", score: 78 },
      ],
      gradeHistory: [
        { month: "Jan", score: 70 },
        { month: "Feb", score: 68 },
        { month: "Mar", score: 72 },
        { month: "Apr", score: 75 },
        { month: "Mei", score: 78 },
        { month: "Jun", score: 80 },
      ],
      attendanceHistory: [
        { date: "1 Mei", status: "Hadir" },
        { date: "2 Mei", status: "Absen" },
        { date: "3 Mei", status: "Hadir" },
        { date: "4 Mei", status: "Hadir" },
        { date: "5 Mei", status: "Hadir" },
      ],
      notes: [
        {
          id: "1",
          date: "5 April 2024",
          title: "Konsultasi Akademik",
          content: "Budi perlu meningkatkan fokus dalam pelajaran matematika.",
        },
        {
          id: "2",
          date: "15 Maret 2024",
          title: "Perilaku di Kelas",
          content:
            "Budi sering terlambat masuk kelas. Perlu diberi perhatian khusus.",
        },
      ],
    },
  ];

  const student = selectedStudent
    ? students.find((s) => s.id === selectedStudent)
    : students[0];

  const averageScore =
    student &&
    student.grades.reduce((total, grade) => total + grade.score, 0) /
      student.grades.length;

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
              Manajemen Siswa
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
                      placeholder="Cari Siswa..."
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
                      <DropdownMenuLabel>Filter Siswa</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Semua Kelas</DropdownMenuItem>
                      <DropdownMenuItem>X IPA 1</DropdownMenuItem>
                      <DropdownMenuItem>X IPA 2</DropdownMenuItem>
                      <DropdownMenuItem>X IPA 3</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Card className="rounded-md pb-0">
                  <CardHeader>
                    <CardTitle>Daftar Siswa</CardTitle>
                    <CardDescription>Kelas X IPA 2 - 30 Siswa</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 max-h-[500px]">
                    {students.map((student) => (
                      <CustomListTile
                        key={student.id}
                        className={`px-6 ${
                          student.id === (selectedStudent || students[0].id)
                            ? "bg-muted"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedStudent(student.id);
                        }}
                        title={student.name}
                        leading={
                          <Avatar>
                            <AvatarImage src={""} />
                            <AvatarFallback>
                              {student.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        }
                        subtitle={`NIS: ${student.nis}`}
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
                          {student?.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {student?.name}
                        </CardTitle>
                        <CardDescription>{student?.class}</CardDescription>
                      </div>
                    </div>
                    <Button variant="outline" onClick={() => {}} size="default">
                      <IconMail /> Hubungi Orang Tua
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-4">
                  <Tabs defaultValue="profile">
                    <TabsList className="w-full">
                      <TabsTrigger value="profile">Profil</TabsTrigger>
                      <TabsTrigger value="attendance">Absensi</TabsTrigger>
                      <TabsTrigger value="nilai">Nilai</TabsTrigger>
                      <TabsTrigger value="notes-from-teacher">
                        Catatan
                      </TabsTrigger>
                      <TabsTrigger value="parents">Orang Tua</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile" className="pt-4">
                      <Card className="rounded-md">
                        <CardHeader>
                          <CardTitle className="text-lg flex justify-between items-center">
                            <h1>Informasi Profil Siswa</h1>
                            <Button
                              variant="outline"
                              onClick={() => {}}
                              size="sm"
                            >
                              <IconEdit /> Edit Profil
                            </Button>
                          </CardTitle>
                          <CardDescription>Detail Profil Siswa</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 px-2">
                            <div className="grid grid-cols-2 gap-x-2 gap-y-8">
                              <div className="flex flex-col gap-2">
                                <h1 className="text-md font-bold tracking-tight">
                                  Nama
                                </h1>
                                <h2 className="text-sm">{student?.name}</h2>
                              </div>
                              <div className="flex flex-col gap-2">
                                <h1 className="text-md font-bold tracking-tight">
                                  Kelas
                                </h1>
                                <h2 className="text-sm">{student?.class}</h2>
                              </div>
                              <div className="flex flex-col gap-2">
                                <h1 className="text-md font-bold tracking-tight">
                                  Jenis Kelamin
                                </h1>
                                <h2 className="text-sm">{student?.gender}</h2>
                              </div>
                              <div className="flex flex-col gap-2">
                                <h1 className="text-md font-bold tracking-tight">
                                  Status
                                </h1>
                                <Badge variant={"default"} color="green">
                                  Aktif
                                </Badge>
                              </div>
                            </div>

                            <div>
                              <h1 className="text-md font-bold tracking-tight pb-2">
                                Ringkasan Akademik
                              </h1>
                              <div className="flex flex-row gap-4">
                                <div className="w-1/2 border rounded-md flex flex-col gap-1 p-2">
                                  <h2>Rata-Rata Nilai</h2>
                                  <h1 className="text-2xl font-bold">
                                    {averageScore}
                                  </h1>
                                </div>
                                <div className="w-1/2 border rounded-md flex flex-col gap-1 p-2">
                                  <h2>Kehadiran</h2>
                                  <h1 className="text-2xl font-bold">
                                    {student?.attendance.present}
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="attendance">
                      <div className="grid grid-cols-2 gap-x-4 pt-4">
                        <Card className="rounded-md">
                          <CardHeader>
                            <CardTitle>Ringkasan Kehadiran</CardTitle>
                            <CardDescription>
                              Semester Genap 2024/2025
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center gap-2">
                                <IconCheck className="w-6 h-6 text-green-500" />
                                <div>
                                  <h2 className="text-md">Hadir</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {student?.attendance.present}%
                                  </h2>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <IconCancel className="w-6 h-6 text-red-500" />
                                <div>
                                  <h2 className="text-md">Absen</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {student?.attendance.absent}%
                                  </h2>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <IconCalendarHeart className="w-6 h-6 text-blue-500" />
                                <div>
                                  <h2 className="text-md">Sakit</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {student?.attendance.sick}%
                                  </h2>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <IconNote className="w-6 h-6 text-yellow-500" />
                                <div>
                                  <h2 className="text-md">Izin</h2>
                                  <h2 className="text-2xl font-bold tracking-tight">
                                    {student?.attendance.permission}%
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="rounded-md">
                          <CardHeader>
                            <CardTitle>Riwayat Absensi</CardTitle>
                            <CardDescription>5 hari terakhir</CardDescription>
                          </CardHeader>
                          <CardContent>
                            {student?.attendanceHistory.map((item) => (
                              <div
                                className="flex py-2 items-center justify-between"
                                key={item.date}
                              >
                                <div className="flex gap-4 items-center">
                                  <IconCalendar className="w-5 h-5 text-gray-500" />
                                  <p>{item.date}</p>
                                </div>
                                <Badge
                                  variant={"default"}
                                  className={`${
                                    item.status.toLowerCase() == "hadir"
                                      ? "bg-green-100 text-green-500 border-green-500"
                                      : item.status.toLowerCase() == "sakit"
                                      ? "bg-red-100 text-red-500 border-red-500"
                                      : item.status.toLowerCase() == "izin"
                                      ? "bg-yellow-100 text-yellow-500 border-yellow-500"
                                      : "bg-blue-100 text-blue-500 border-blue-500"
                                  }`}
                                >
                                  {item.status}
                                </Badge>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    <TabsContent value="nilai">
                      <div className="flex gap-4 flex-col lg:flex-row pt-4">
                        <Card className="w-full rounded-md">
                          <CardHeader>
                            <CardTitle>Nilai Terbaru</CardTitle>
                            <CardDescription>
                              Semester Genap 2024/2025
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="gap-3 flex flex-col">
                            {student?.grades.map((item) => (
                              <div
                                className="flex items-center justify-between"
                                key={item.subject}
                              >
                                <div className="flex gap-4 items-center">
                                  <IconBook className="w-5 h-5 text-gray-500" />
                                  <p>{item.subject}</p>
                                </div>
                                <Badge
                                  className={`${
                                    item.score >= 85
                                      ? "bg-green-100 text-green-500 border-green-300"
                                      : item.score >= 70
                                      ? "bg-blue-100 text-blue-500 border-blue-300"
                                      : "bg-red-100 text-red-500 border-red-300"
                                  }`}
                                >
                                  {item.score}
                                </Badge>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                        <NilaiChart chartData={student!.gradeHistory} />
                      </div>
                    </TabsContent>
                    <TabsContent value="notes-from-teacher" className="pt-4">
                      <Card className="w-full rounded-md">
                        <CardHeader>
                          <CardTitle>
                            <div className="flex justify-between items-center">
                              <h1>Notifikasi Terbaru</h1>
                              <Button variant={"outline"} size={"sm"}>
                                Tambah Catatan
                              </Button>
                            </div>
                          </CardTitle>
                          <CardDescription>
                            Pemberitahuan dan pengumuman penting
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="gap-4 flex flex-col">
                          {student?.notes.map((note) => (
                            <Card className="rounded-md" key={note.id}>
                              <CardHeader>
                                <div className="flex justify-between items-center">
                                  <CardTitle>{note.title}</CardTitle>
                                  <div className="flex gap-2 items-center text-gray-400 text-sm">
                                    <IconCalendar className="w-4 h-4" />
                                    <p className="text-sm">{note.date}</p>
                                  </div>
                                </div>
                                <CardDescription>
                                  {note.content}
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          ))}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="parents" className="pt-4">
                      <Card className="w-full rounded-md">
                        <CardHeader>
                          <CardTitle className="text-lg">
                            Informasi Orang Tua
                          </CardTitle>
                          <CardDescription>
                            Detail kontak orang tua/wali
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-y-4">
                            <div className="flex flex-col gap-2">
                              <h1 className="font-bold text-sm text-gray-500">
                                Nama Orang Tua/Wali
                              </h1>
                              <p className="text-sm">{student?.parentName}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <h1 className="font-bold text-sm text-gray-500">
                                Nomor Telepon
                              </h1>
                              <div className="flex gap-2 items-center">
                                <IconPhone className="w-4 h-4 text-gray-500" />
                                <p className="text-sm">
                                  {student?.parentPhone}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <h1 className="font-bold text-sm text-gray-500">
                                Email
                              </h1>
                              {student?.parentEmail ? (
                                <div className="flex gap-2 items-center">
                                  <IconMail className="w-4 h-4 text-gray-500" />
                                  <p className="text-sm">
                                    {student?.parentEmail}
                                  </p>
                                </div>
                              ) : (
                                <p className="text-gray-400 text-sm">
                                  Tidak tersedia
                                </p>
                              )}
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
