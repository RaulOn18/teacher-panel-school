"use client";

import { useState } from "react";
import {
  BarChart3,
  Calendar,
  ChevronDown,
  Download,
  FileText,
  Filter,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { DistribusiNilai } from "./distribusi-nilai";
import { TrenNilaiRataRata } from "./tren-nilai-rata-rata";
export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  // Data kelas
  const classes = [
    {
      id: "1",
      name: "X IPA 2",
      subject: "Matematika",
      totalStudents: 32,
      averageGrade: 78,
      assignments: [
        {
          id: "1",
          title: "Tugas 1: Persamaan Linear",
          dueDate: "12 April 2024",
          status: "Selesai",
          average: 82,
        },
        {
          id: "2",
          title: "Tugas 2: Persamaan Kuadrat",
          dueDate: "19 April 2024",
          status: "Selesai",
          average: 75,
        },
        {
          id: "3",
          title: "UTS",
          dueDate: "25 April 2024",
          status: "Selesai",
          average: 78,
        },
        {
          id: "4",
          title: "Tugas 3: Fungsi",
          dueDate: "5 Mei 2024",
          status: "Aktif",
          average: null,
        },
      ],
      gradeDistribution: [
        { grade: "A", count: 8 },
        { grade: "B", count: 12 },
        { grade: "C", count: 9 },
        { grade: "D", count: 3 },
        { grade: "E", count: 0 },
      ],
      gradeData: [
        { name: "≥85", value: 25, color: "#10b981" },
        { name: "75-84", value: 38, color: "#3b82f6" },
        { name: "65-74", value: 28, color: "#f59e0b" },
        { name: "<65", value: 9, color: "#ef4444" },
      ],
      students: [
        { id: "1", name: "Ahmad Rizki", grade: 82, status: "Lulus" },
        { id: "2", name: "Siti Nurhaliza", grade: 90, status: "Lulus" },
        { id: "3", name: "Budi Santoso", grade: 75, status: "Lulus" },
        { id: "4", name: "Dewi Lestari", grade: 85, status: "Lulus" },
        { id: "5", name: "Eko Prasetyo", grade: 68, status: "Tidak Lulus" },
      ],
      gradeHistory: [
        { month: "Jan", average: 75 },
        { month: "Feb", average: 77 },
        { month: "Mar", average: 76 },
        { month: "Apr", average: 78 },
        { month: "Mei", average: 80 },
      ],
    },
    {
      id: "2",
      name: "XI IPA 1",
      subject: "Fisika",
      totalStudents: 30,
      averageGrade: 75,
      assignments: [
        {
          id: "5",
          title: "Tugas 1: Hukum Newton",
          dueDate: "10 April 2024",
          status: "Selesai",
          average: 76,
        },
        {
          id: "6",
          title: "Tugas 2: Energi",
          dueDate: "17 April 2024",
          status: "Selesai",
          average: 72,
        },
        {
          id: "7",
          title: "UTS",
          dueDate: "24 April 2024",
          status: "Selesai",
          average: 75,
        },
        {
          id: "8",
          title: "Tugas 3: Momentum",
          dueDate: "8 Mei 2024",
          status: "Aktif",
          average: null,
        },
      ],
      gradeDistribution: [
        { grade: "A", count: 5 },
        { grade: "B", count: 10 },
        { grade: "C", count: 12 },
        { grade: "D", count: 3 },
        { grade: "E", count: 0 },
      ],
      gradeData: [
        { name: "≥85", value: 17, color: "#10b981" },
        { name: "75-84", value: 33, color: "#3b82f6" },
        { name: "65-74", value: 40, color: "#f59e0b" },
        { name: "<65", value: 10, color: "#ef4444" },
      ],
      students: [
        { id: "6", name: "Fajar Nugroho", grade: 78, status: "Lulus" },
        { id: "7", name: "Indah Permata", grade: 82, status: "Lulus" },
        { id: "8", name: "Joko Widodo", grade: 70, status: "Lulus" },
        { id: "9", name: "Kartika Sari", grade: 85, status: "Lulus" },
        { id: "10", name: "Lukman Hakim", grade: 62, status: "Tidak Lulus" },
      ],
      gradeHistory: [
        { month: "Jan", average: 72 },
        { month: "Feb", average: 73 },
        { month: "Mar", average: 74 },
        { month: "Apr", average: 75 },
        { month: "Mei", average: 76 },
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
              <div className="flex flex-col gap-4 md:flex-row w-full">
                <div className="md:w-1/3 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Cari kelas..."
                        className="pl-8"
                      />
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Filter className="h-4 w-4" />
                          <span className="sr-only">Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                          Filter Mata Pelajaran
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          Semua Mata Pelajaran
                        </DropdownMenuItem>
                        <DropdownMenuItem>Matematika</DropdownMenuItem>
                        <DropdownMenuItem>Fisika</DropdownMenuItem>
                        <DropdownMenuItem>Kimia</DropdownMenuItem>
                        <DropdownMenuItem>Biologi</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Daftar Kelas</CardTitle>
                      <CardDescription>
                        Pilih kelas untuk melihat nilai
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[500px] overflow-auto">
                        {classes.map((c) => (
                          <div
                            key={c.id}
                            className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                              c.id === (selectedClass || classes[0].id)
                                ? "bg-muted"
                                : ""
                            }`}
                            onClick={() => setSelectedClass(c.id)}
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                              <BarChart3 className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium leading-none">
                                  {c.name}
                                </p>
                                <Badge variant="outline" className="ml-2">
                                  {c.subject}
                                </Badge>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <FileText className="mr-1 h-3 w-3" />
                                {c.assignments.length} tugas
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <BarChart3 className="mr-1 h-3 w-3" />
                                Rata-rata: {c.averageGrade}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:w-2/3">
                  <Card>
                    <CardHeader className="flex flex-row items-center">
                      <div>
                        <CardTitle>
                          {classData?.name} - {classData?.subject}
                        </CardTitle>
                        <CardDescription>
                          Manajemen nilai untuk {classData?.totalStudents} siswa
                        </CardDescription>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Ekspor
                        </Button>
                        <Button size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          Tambah Tugas
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="ringkasan" className="space-y-4">
                        <TabsList>
                          <TabsTrigger value="ringkasan">Ringkasan</TabsTrigger>
                          <TabsTrigger value="tugas">Tugas</TabsTrigger>
                          <TabsTrigger value="siswa">Siswa</TabsTrigger>
                          <TabsTrigger value="laporan">Laporan</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ringkasan" className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <DistribusiNilai
                              chartData={classData!.gradeDistribution}
                            />
                            <Card>
                              <CardHeader>
                                <CardTitle>Persentase Nilai</CardTitle>
                                <CardDescription>
                                  Proporsi nilai siswa
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="h-[250px]">
                                  <ResponsiveContainer
                                    width="100%"
                                    height="100%"
                                  >
                                    <PieChart>
                                      <Pie
                                        data={classData?.gradeData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={2}
                                        dataKey="value"
                                        label={({ name, percent }) =>
                                          `${name} ${(percent * 100).toFixed(
                                            0
                                          )}%`
                                        }
                                        labelLine={false}
                                      >
                                        {classData?.gradeData.map(
                                          (entry, index) => (
                                            <Cell
                                              key={`cell-${index}`}
                                              fill={entry.color}
                                            />
                                          )
                                        )}
                                      </Pie>
                                      <Tooltip
                                        formatter={(value) => [
                                          `${value}%`,
                                          "Persentase",
                                        ]}
                                        contentStyle={{ borderRadius: "8px" }}
                                      />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <TrenNilaiRataRata
                            chartData={classData!.gradeHistory}
                          />
                        </TabsContent>
                        <TabsContent value="tugas" className="space-y-4">
                          <Card>
                            <CardHeader className="flex flex-row items-center">
                              <div>
                                <CardTitle>Daftar Tugas</CardTitle>
                                <CardDescription>
                                  Tugas dan penilaian untuk {classData?.name}
                                </CardDescription>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="ml-auto"
                              >
                                <Plus className="mr-2 h-4 w-4" />
                                Tambah Tugas
                              </Button>
                            </CardHeader>
                            <CardContent>
                              <div className="rounded-md border">
                                <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
                                  <div className="col-span-5">Judul</div>
                                  <div className="col-span-3">
                                    Tenggat Waktu
                                  </div>
                                  <div className="col-span-2">Status</div>
                                  <div className="col-span-1">Rata-rata</div>
                                  <div className="col-span-1"></div>
                                </div>
                                {classData?.assignments.map((assignment) => (
                                  <div
                                    key={assignment.id}
                                    className="grid grid-cols-12 gap-4 p-4 items-center border-b last:border-0"
                                  >
                                    <div className="col-span-5 flex items-center gap-3">
                                      <FileText className="h-5 w-5 text-muted-foreground" />
                                      <span>{assignment.title}</span>
                                    </div>
                                    <div className="col-span-3 flex items-center text-sm text-muted-foreground">
                                      <Calendar className="mr-2 h-4 w-4" />
                                      {assignment.dueDate}
                                    </div>
                                    <div className="col-span-2">
                                      <Badge
                                        variant="outline"
                                        className={
                                          assignment.status === "Aktif"
                                            ? "bg-green-50 text-green-700"
                                            : assignment.status === "Selesai"
                                            ? "bg-blue-50 text-blue-700"
                                            : "bg-yellow-50 text-yellow-700"
                                        }
                                      >
                                        {assignment.status}
                                      </Badge>
                                    </div>
                                    <div className="col-span-1 font-medium">
                                      {assignment.average
                                        ? assignment.average
                                        : "-"}
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
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Edit
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                            <Upload className="mr-2 h-4 w-4" />
                                            Input Nilai
                                          </DropdownMenuItem>
                                          <DropdownMenuSeparator />
                                          <DropdownMenuItem className="text-red-500">
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Hapus
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
                        <TabsContent value="siswa" className="space-y-4">
                          <Card>
                            <CardHeader className="flex flex-row items-center">
                              <div>
                                <CardTitle>Nilai Siswa</CardTitle>
                                <CardDescription>
                                  Nilai rata-rata siswa di kelas
                                </CardDescription>
                              </div>
                              <div className="ml-auto">
                                <div className="relative">
                                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                  <Input
                                    type="search"
                                    placeholder="Cari siswa..."
                                    className="w-[200px] pl-8"
                                  />
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="rounded-md border">
                                <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
                                  <div className="col-span-6">Nama</div>
                                  <div className="col-span-3">
                                    Nilai Rata-rata
                                  </div>
                                  <div className="col-span-2">Status</div>
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
                                    <div className="col-span-3">
                                      <Badge
                                        variant="outline"
                                        className={
                                          student.grade >= 85
                                            ? "bg-green-50 text-green-700"
                                            : student.grade >= 75
                                            ? "bg-blue-50 text-blue-700"
                                            : student.grade >= 65
                                            ? "bg-yellow-50 text-yellow-700"
                                            : "bg-red-50 text-red-700"
                                        }
                                      >
                                        {student.grade}
                                      </Badge>
                                    </div>
                                    <div className="col-span-2">
                                      <Badge
                                        variant="outline"
                                        className={
                                          student.status === "Lulus"
                                            ? "bg-green-50 text-green-700"
                                            : "bg-red-50 text-red-700"
                                        }
                                      >
                                        {student.status}
                                      </Badge>
                                    </div>
                                    <div className="col-span-1 text-right">
                                      <Button variant="ghost" size="icon">
                                        <ChevronDown className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="laporan" className="space-y-4">
                          <Card>
                            <CardHeader>
                              <CardTitle>Laporan Nilai</CardTitle>
                              <CardDescription>
                                Laporan nilai semester ini
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                  <div className="rounded-lg border p-4">
                                    <div className="font-medium">
                                      Laporan Nilai Per Siswa
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Laporan nilai individual untuk setiap
                                      siswa
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
                                      Laporan Nilai Kelas
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Laporan nilai keseluruhan kelas
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
                                      Analisis Nilai
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Analisis statistik nilai kelas
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
                                      Laporan untuk Orang Tua
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Laporan nilai untuk dibagikan ke orang tua
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
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
