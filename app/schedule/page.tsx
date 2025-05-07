"use client";

import { useState } from "react";
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Filter,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
  Users,
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
  CardFooter,
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
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<"day" | "week" | "month">("week");

  // Data jadwal mengajar
  const teachingSchedule = [
    {
      id: "1",
      subject: "Matematika",
      class: "X IPA 2",
      day: "Senin",
      time: "07:30 - 09:00",
      room: "Ruang 203",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      id: "2",
      subject: "Matematika",
      class: "XI IPA 1",
      day: "Senin",
      time: "09:15 - 10:45",
      room: "Ruang 205",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      id: "3",
      subject: "Fisika",
      class: "X IPA 3",
      day: "Selasa",
      time: "07:30 - 09:00",
      room: "Lab Fisika",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      id: "4",
      subject: "Fisika",
      class: "XI IPA 2",
      day: "Selasa",
      time: "10:00 - 11:30",
      room: "Lab Fisika",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      id: "5",
      subject: "Matematika",
      class: "X IPA 1",
      day: "Rabu",
      time: "07:30 - 09:00",
      room: "Ruang 201",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      id: "6",
      subject: "Matematika",
      class: "XII IPA 1",
      day: "Rabu",
      time: "09:15 - 10:45",
      room: "Ruang 301",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      id: "7",
      subject: "Fisika",
      class: "XII IPA 2",
      day: "Kamis",
      time: "07:30 - 09:00",
      room: "Lab Fisika",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      id: "8",
      subject: "Matematika",
      class: "XI IPA 3",
      day: "Jumat",
      time: "07:30 - 09:00",
      room: "Ruang 206",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
  ];

  // Data acara sekolah
  const schoolEvents = [
    {
      id: "1",
      title: "Rapat Guru",
      date: "10 Mei 2024",
      time: "13:00 - 15:00",
      location: "Ruang Rapat",
      description: "Rapat evaluasi semester genap",
      color: "bg-purple-100 text-purple-800 border-purple-300",
    },
    {
      id: "2",
      title: "Ujian Akhir Semester",
      date: "15-25 Mei 2024",
      time: "07:30 - 12:00",
      location: "Seluruh Ruang Kelas",
      description: "Ujian akhir semester genap untuk semua kelas",
      color: "bg-red-100 text-red-800 border-red-300",
    },
    {
      id: "3",
      title: "Pelatihan Guru",
      date: "28 Mei 2024",
      time: "09:00 - 15:00",
      location: "Aula Sekolah",
      description: "Pelatihan penggunaan media pembelajaran digital",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      id: "4",
      title: "Pembagian Rapor",
      date: "10 Juni 2024",
      time: "08:00 - 12:00",
      location: "Ruang Kelas Masing-masing",
      description: "Pembagian rapor semester genap",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      id: "5",
      title: "Libur Semester",
      date: "12 Juni - 10 Juli 2024",
      time: "Seharian",
      location: "-",
      description: "Libur semester genap",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
  ];

  // Data jadwal hari ini
  const todaySchedule = teachingSchedule.filter(
    (schedule) => schedule.day === "Senin"
  );

  // Data untuk tampilan mingguan
  const weekDays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const timeSlots = [
    "07:30 - 09:00",
    "09:15 - 10:45",
    "11:00 - 12:30",
    "13:00 - 14:30",
    "14:45 - 16:15",
  ];

  // Fungsi untuk mendapatkan jadwal berdasarkan hari dan waktu
  const getScheduleByDayAndTime = (day: string, time: string) => {
    return teachingSchedule.find(
      (schedule) => schedule.day === day && schedule.time === time
    );
  };

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
                  <Card>
                    <CardHeader>
                      <CardTitle>Kalender</CardTitle>
                      <CardDescription>Lihat jadwal dan acara</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex">
                      <Calendar
                        mode="single"
                        onSelect={(v) => {
                          if (v) {
                            setDate(v);
                          }
                        }}
                        className="rounded-md border w-full items-center justify-center flex"
                        selected={date}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDate(new Date())}
                      >
                        Hari Ini
                      </Button>
                      <Select
                        value={view}
                        onValueChange={(value) =>
                          setView(value as "day" | "week" | "month")
                        }
                      >
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Pilih Tampilan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="day">Harian</SelectItem>
                          <SelectItem value="week">Mingguan</SelectItem>
                          <SelectItem value="month">Bulanan</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Jadwal Hari Ini</CardTitle>
                      <CardDescription>
                        {new Date().toLocaleDateString("id-ID", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[300px] overflow-auto">
                        {todaySchedule.length > 0 ? (
                          todaySchedule.map((schedule) => (
                            <div
                              key={schedule.id}
                              className="flex items-start gap-3 p-3 border-b last:border-0"
                            >
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                                <BookOpen className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium leading-none">
                                    {schedule.subject}
                                  </p>
                                  <Badge variant="outline" className="ml-2">
                                    {schedule.class}
                                  </Badge>
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {schedule.time}
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Users className="mr-1 h-3 w-3" />
                                  {schedule.room}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 text-center text-muted-foreground">
                            Tidak ada jadwal hari ini
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:w-2/3">
                  <Card>
                    <CardHeader className="flex flex-row items-center">
                      <div>
                        <CardTitle>Jadwal Mengajar</CardTitle>
                        <CardDescription>
                          Jadwal mengajar dan acara sekolah
                        </CardDescription>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Ekspor
                        </Button>
                        <Button size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          Tambah Jadwal
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs
                        defaultValue="jadwal-mengajar"
                        className="space-y-4"
                      >
                        <TabsList>
                          <TabsTrigger value="jadwal-mengajar">
                            Jadwal Mengajar
                          </TabsTrigger>
                          <TabsTrigger value="acara-sekolah">
                            Acara Sekolah
                          </TabsTrigger>
                          <TabsTrigger value="tampilan-mingguan">
                            Tampilan Mingguan
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent
                          value="jadwal-mengajar"
                          className="space-y-4"
                        >
                          <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="search"
                                placeholder="Cari jadwal..."
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
                                  Filter Jadwal
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  Semua Mata Pelajaran
                                </DropdownMenuItem>
                                <DropdownMenuItem>Matematika</DropdownMenuItem>
                                <DropdownMenuItem>Fisika</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Semua Kelas</DropdownMenuItem>
                                <DropdownMenuItem>Kelas X</DropdownMenuItem>
                                <DropdownMenuItem>Kelas XI</DropdownMenuItem>
                                <DropdownMenuItem>Kelas XII</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          <div className="rounded-md border">
                            <div className="grid grid-cols-12 gap-4 p-4 font-medium border-b">
                              <div className="col-span-3">Mata Pelajaran</div>
                              <div className="col-span-2">Kelas</div>
                              <div className="col-span-2">Hari</div>
                              <div className="col-span-2">Waktu</div>
                              <div className="col-span-2">Ruangan</div>
                              <div className="col-span-1"></div>
                            </div>
                            {teachingSchedule.map((schedule) => (
                              <div
                                key={schedule.id}
                                className="grid grid-cols-12 gap-4 p-4 items-center border-b last:border-0"
                              >
                                <div className="col-span-3 flex items-center gap-2">
                                  <div
                                    className={`h-3 w-3 rounded-full ${
                                      schedule.subject === "Matematika"
                                        ? "bg-blue-500"
                                        : "bg-green-500"
                                    }`}
                                  ></div>
                                  <span>{schedule.subject}</span>
                                </div>
                                <div className="col-span-2">
                                  {schedule.class}
                                </div>
                                <div className="col-span-2">{schedule.day}</div>
                                <div className="col-span-2">
                                  {schedule.time}
                                </div>
                                <div className="col-span-2">
                                  {schedule.room}
                                </div>
                                <div className="col-span-1 text-right">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>
                                        Edit Jadwal
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Lihat Detail
                                      </DropdownMenuItem>
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem className="text-red-500">
                                        Hapus Jadwal
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent
                          value="acara-sekolah"
                          className="space-y-4"
                        >
                          <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="search"
                                placeholder="Cari acara..."
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
                                  Filter Acara
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Semua Acara</DropdownMenuItem>
                                <DropdownMenuItem>Rapat</DropdownMenuItem>
                                <DropdownMenuItem>Ujian</DropdownMenuItem>
                                <DropdownMenuItem>Pelatihan</DropdownMenuItem>
                                <DropdownMenuItem>Libur</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>

                          <div className="space-y-4">
                            {schoolEvents.map((event) => (
                              <Card key={event.id}>
                                <CardHeader className="pb-2">
                                  <div className="flex items-center justify-between">
                                    <CardTitle>{event.title}</CardTitle>
                                    <Badge
                                      variant="outline"
                                      className={event.color}
                                    >
                                      {event.date}
                                    </Badge>
                                  </div>
                                  <CardDescription>
                                    <div className="flex items-center gap-2">
                                      <Clock className="h-3 w-3" />
                                      {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Users className="h-3 w-3" />
                                      {event.location}
                                    </div>
                                  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-sm">{event.description}</p>
                                </CardContent>
                                <CardFooter className="flex justify-end pt-0">
                                  <Button variant="ghost" size="sm">
                                    Lihat Detail
                                  </Button>
                                </CardFooter>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent
                          value="tampilan-mingguan"
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <Button variant="outline" size="sm">
                              <ChevronLeft className="mr-2 h-4 w-4" />
                              Minggu Sebelumnya
                            </Button>
                            <div className="font-medium">8 - 13 Mei 2024</div>
                            <Button variant="outline" size="sm">
                              Minggu Berikutnya
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>

                          <div className="rounded-md border overflow-auto">
                            <div className="min-w-[800px]">
                              <div className="grid grid-cols-7 gap-0">
                                <div className="p-2 border-r border-b bg-muted/50"></div>
                                {weekDays.map((day) => (
                                  <div
                                    key={day}
                                    className="p-2 text-center font-medium border-r last:border-r-0 border-b bg-muted/50"
                                  >
                                    {day}
                                  </div>
                                ))}
                              </div>

                              {timeSlots.map((time) => (
                                <div
                                  key={time}
                                  className="grid grid-cols-7 gap-0"
                                >
                                  <div className="p-2 text-xs border-r border-b">
                                    {time}
                                  </div>
                                  {weekDays.map((day) => {
                                    const schedule = getScheduleByDayAndTime(
                                      day,
                                      time
                                    );
                                    return (
                                      <div
                                        key={`${day}-${time}`}
                                        className="p-2 border-r last:border-r-0 border-b min-h-[80px]"
                                      >
                                        {schedule ? (
                                          <div
                                            className={`p-2 rounded-md text-xs h-full ${schedule.color}`}
                                          >
                                            <div className="font-medium">
                                              {schedule.subject}
                                            </div>
                                            <div>{schedule.class}</div>
                                            <div>{schedule.room}</div>
                                          </div>
                                        ) : null}
                                      </div>
                                    );
                                  })}
                                </div>
                              ))}
                            </div>
                          </div>
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
