"use client";

import { useState } from "react";
import {
  Archive,
  ArrowRight,
  AtSign,
  Bell,
  BookOpen,
  Clock,
  File,
  Filter,
  Inbox,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Send,
  Star,
  Trash2,
  Users,
  X,
} from "lucide-react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
export default function Page() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);

  // Data pesan
  const messages = [
    {
      id: "1",
      sender: {
        name: "Dewi Susanti",
        role: "Orang Tua Siswa",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      subject: "Izin Tidak Masuk Sekolah",
      preview:
        "Dengan hormat, saya ingin memberitahukan bahwa anak saya, Siti Nurhaliza, tidak dapat hadir ke sekolah hari ini karena sakit...",
      content:
        "Dengan hormat,\n\nSaya ingin memberitahukan bahwa anak saya, Siti Nurhaliza, tidak dapat hadir ke sekolah hari ini karena sakit. Dia mengalami demam sejak semalam dan saat ini sedang dalam perawatan dokter.\n\nSebagai bukti, saya akan mengirimkan surat keterangan dokter segera setelah kunjungan ke dokter selesai.\n\nMohon pengertiannya dan terima kasih atas perhatian Bapak/Ibu Guru.\n\nHormat saya,\nDewi Susanti\nOrang Tua dari Siti Nurhaliza (Kelas X IPA 2)",
      date: "Hari ini, 08:30",
      isRead: false,
      isStarred: true,
      hasAttachment: false,
      category: "Izin",
    },
    {
      id: "2",
      sender: {
        name: "Agus Widodo",
        role: "Orang Tua Siswa",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      subject: "Pertanyaan tentang PR Matematika",
      preview:
        "Selamat sore Pak Guru, saya ingin bertanya mengenai PR matematika yang diberikan kemarin. Anak saya, Budi Santoso, mengalami kesulitan...",
      content:
        "Selamat sore Pak Guru,\n\nSaya ingin bertanya mengenai PR matematika yang diberikan kemarin. Anak saya, Budi Santoso, mengalami kesulitan dalam mengerjakan soal nomor 5 tentang persamaan kuadrat.\n\nApakah mungkin Bapak bisa memberikan petunjuk tambahan atau contoh penyelesaian yang serupa? Kami sudah mencoba mencari referensi tambahan, tetapi masih belum menemukan penjelasan yang mudah dipahami.\n\nTerima kasih atas bantuan dan perhatiannya.\n\nHormat saya,\nAgus Widodo\nOrang Tua dari Budi Santoso (Kelas X IPA 2)",
      date: "Kemarin, 16:45",
      isRead: true,
      isStarred: false,
      hasAttachment: false,
      category: "Akademik",
    },
    {
      id: "3",
      sender: {
        name: "Ahmad Rizki",
        role: "Siswa",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      subject: "Pengumpulan Tugas Matematika",
      preview:
        "Selamat siang Pak, saya ingin mengumpulkan tugas matematika yang kemarin. Saya lampirkan file tugasnya dalam pesan ini...",
      content:
        "Selamat siang Pak,\n\nSaya ingin mengumpulkan tugas matematika yang kemarin. Saya lampirkan file tugasnya dalam pesan ini.\n\nMohon maaf karena sedikit terlambat dari batas waktu yang ditentukan. Saya mengalami kendala teknis saat akan mengunggah file ini kemarin malam.\n\nTerima kasih atas pengertiannya.\n\nHormat saya,\nAhmad Rizki\nKelas X IPA 2",
      date: "2 hari yang lalu, 13:20",
      isRead: true,
      isStarred: false,
      hasAttachment: true,
      attachments: [
        {
          name: "Tugas_Matematika_Ahmad_Rizki.pdf",
          size: "2.4 MB",
          type: "PDF",
        },
      ],
      category: "Tugas",
    },
    {
      id: "4",
      sender: {
        name: "Kepala Sekolah",
        role: "Admin",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      subject: "Rapat Evaluasi Semester",
      preview:
        "Kepada seluruh guru, dengan ini kami mengundang Bapak/Ibu untuk menghadiri rapat evaluasi semester yang akan dilaksanakan pada...",
      content:
        "Kepada seluruh guru,\n\nDengan ini kami mengundang Bapak/Ibu untuk menghadiri rapat evaluasi semester yang akan dilaksanakan pada:\n\nHari/Tanggal: Jumat, 10 Mei 2024\nWaktu: 13:00 - 15:00 WIB\nTempat: Ruang Rapat Utama\nAgenda: Evaluasi Pembelajaran Semester Genap\n\nMohon kehadiran Bapak/Ibu tepat waktu dan membawa laporan nilai serta kehadiran siswa.\n\nTerima kasih atas perhatian dan kerjasamanya.\n\nHormat kami,\nKepala Sekolah",
      date: "3 hari yang lalu, 10:15",
      isRead: true,
      isStarred: true,
      hasAttachment: false,
      category: "Pengumuman",
    },
    {
      id: "5",
      sender: {
        name: "Wakil Kepala Sekolah",
        role: "Admin",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      subject: "Pengumpulan Soal Ujian Akhir Semester",
      preview:
        "Yth. Bapak/Ibu Guru, Mengingatkan kembali bahwa batas waktu pengumpulan soal ujian akhir semester adalah tanggal 5 Mei 2024...",
      content:
        "Yth. Bapak/Ibu Guru,\n\nMengingatkan kembali bahwa batas waktu pengumpulan soal ujian akhir semester adalah tanggal 5 Mei 2024. Mohon untuk segera mengumpulkan soal ujian beserta kunci jawaban dalam format yang telah ditentukan.\n\nSoal dapat dikirimkan melalui email atau diserahkan langsung ke bagian kurikulum.\n\nTerima kasih atas kerjasamanya.\n\nHormat kami,\nWakil Kepala Sekolah Bidang Kurikulum",
      date: "5 hari yang lalu, 09:30",
      isRead: true,
      isStarred: false,
      hasAttachment: true,
      attachments: [
        {
          name: "Template_Soal_UAS.docx",
          size: "1.2 MB",
          type: "DOCX",
        },
      ],
      category: "Pengumuman",
    },
  ];

  // Data kontak
  const contacts = [
    {
      id: "1",
      name: "Dewi Susanti",
      role: "Orang Tua Siswa",
      child: "Siti Nurhaliza",
      class: "X IPA 2",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Agus Widodo",
      role: "Orang Tua Siswa",
      child: "Budi Santoso",
      class: "X IPA 2",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Budi Santoso",
      role: "Siswa",
      class: "X IPA 2",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Siti Nurhaliza",
      role: "Siswa",
      class: "X IPA 2",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      name: "Ahmad Rizki",
      role: "Siswa",
      class: "X IPA 2",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "6",
      name: "Kepala Sekolah",
      role: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "7",
      name: "Wakil Kepala Sekolah",
      role: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  // Data notifikasi
  const notifications = [
    {
      id: "1",
      title: "Pesan Baru",
      description:
        "Dewi Susanti mengirim pesan baru tentang izin tidak masuk sekolah",
      time: "1 jam yang lalu",
      isRead: false,
    },
    {
      id: "2",
      title: "Pengingat Rapat",
      description:
        "Rapat evaluasi semester akan dilaksanakan besok pukul 13:00",
      time: "3 jam yang lalu",
      isRead: false,
    },
    {
      id: "3",
      title: "Batas Waktu Pengumpulan Nilai",
      description: "Batas waktu pengumpulan nilai UTS adalah 3 hari lagi",
      time: "1 hari yang lalu",
      isRead: true,
    },
  ];

  const message = selectedMessage
    ? messages.find((m) => m.id === selectedMessage)
    : messages[0];

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
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="md:w-1/4 space-y-4">
                  <Button
                    className="w-full"
                    onClick={() => setComposeOpen(true)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Tulis Pesan
                  </Button>

                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <Inbox className="mr-2 h-4 w-4" />
                      Kotak Masuk
                      <Badge className="ml-auto" variant="secondary">
                        2
                      </Badge>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <Star className="mr-2 h-4 w-4" />
                      Berbintang
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Terkirim
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <Archive className="mr-2 h-4 w-4" />
                      Arsip
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Sampah
                    </Button>
                  </div>

                  <div className="pt-2">
                    <h3 className="mb-2 px-4 text-sm font-medium">Kategori</h3>
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-normal"
                      >
                        <Badge
                          variant="outline"
                          className="mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                        >
                          Akademik
                        </Badge>
                        Akademik
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-normal"
                      >
                        <Badge
                          variant="outline"
                          className="mr-2 bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                        >
                          Izin
                        </Badge>
                        Izin
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-normal"
                      >
                        <Badge
                          variant="outline"
                          className="mr-2 bg-yellow-100 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800"
                        >
                          Tugas
                        </Badge>
                        Tugas
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start font-normal"
                      >
                        <Badge
                          variant="outline"
                          className="mr-2 bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800"
                        >
                          Pengumuman
                        </Badge>
                        Pengumuman
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <Card className="h-full">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Cari pesan..."
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
                            <DropdownMenuLabel>Filter Pesan</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Semua Pesan</DropdownMenuItem>
                            <DropdownMenuItem>Belum Dibaca</DropdownMenuItem>
                            <DropdownMenuItem>Dengan Lampiran</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Dari Siswa</DropdownMenuItem>
                            <DropdownMenuItem>Dari Orang Tua</DropdownMenuItem>
                            <DropdownMenuItem>Dari Admin</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline" size="icon">
                          <Bell className="h-4 w-4" />
                          <span className="sr-only">Notifikasi</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Tabs defaultValue="pesan" className="h-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="pesan">Pesan</TabsTrigger>
                          <TabsTrigger value="kontak">Kontak</TabsTrigger>
                          <TabsTrigger value="notifikasi">
                            Notifikasi
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent
                          value="pesan"
                          className="h-[calc(100%-40px)]"
                        >
                          <div className="grid h-full md:grid-cols-[300px_1fr]">
                            <div className="border-r">
                              <div className="max-h-[600px] overflow-auto">
                                {messages.map((m) => (
                                  <div
                                    key={m.id}
                                    className={`flex cursor-pointer flex-col gap-1 border-b p-3 ${
                                      m.id ===
                                      (selectedMessage || messages[0].id)
                                        ? "bg-muted"
                                        : ""
                                    } ${
                                      !m.isRead
                                        ? "bg-blue-50 dark:bg-blue-950"
                                        : ""
                                    }`}
                                    onClick={() => setSelectedMessage(m.id)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                          <AvatarImage
                                            src={
                                              m.sender.avatar ||
                                              "/placeholder.svg"
                                            }
                                            alt={m.sender.name}
                                          />
                                          <AvatarFallback>
                                            {m.sender.name.substring(0, 2)}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <div className="font-medium">
                                            {m.sender.name}
                                          </div>
                                          <div className="text-xs text-muted-foreground">
                                            {m.sender.role}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        {m.isStarred && (
                                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        )}
                                        {m.hasAttachment && (
                                          <Paperclip className="h-3 w-3" />
                                        )}
                                        <span>{m.date}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-medium">
                                        {m.subject}
                                      </div>
                                      <div className="text-xs text-muted-foreground line-clamp-1">
                                        {m.preview}
                                      </div>
                                    </div>
                                    {m.category && (
                                      <div className="mt-1">
                                        <Badge
                                          variant="outline"
                                          className={
                                            m.category === "Akademik"
                                              ? "bg-blue-100 text-blue-800"
                                              : m.category === "Izin"
                                              ? "bg-green-100 text-green-800"
                                              : m.category === "Tugas"
                                              ? "bg-yellow-100 text-yellow-800"
                                              : "bg-purple-100 text-purple-800"
                                          }
                                        >
                                          {m.category}
                                        </Badge>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="border-b p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage
                                        src={
                                          message?.sender.avatar ||
                                          "/placeholder.svg"
                                        }
                                        alt={message?.sender.name}
                                      />
                                      <AvatarFallback>
                                        {message?.sender.name.substring(0, 2)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium">
                                        {message?.sender.name}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {message?.sender.role}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                      <Star
                                        className={`h-4 w-4 ${
                                          message?.isStarred
                                            ? "fill-yellow-400 text-yellow-400"
                                            : ""
                                        }`}
                                      />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                      <ArrowRight className="h-4 w-4" />
                                    </Button>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                          Tandai Belum Dibaca
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                          Arsipkan
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                          Cetak
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-500">
                                          Hapus
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <h3 className="text-lg font-medium">
                                    {message?.subject}
                                  </h3>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    <span>{message?.date}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 overflow-auto p-4">
                                <div className="whitespace-pre-line">
                                  {message?.content}
                                </div>
                                {message?.hasAttachment &&
                                  message?.attachments && (
                                    <div className="mt-4">
                                      <h4 className="mb-2 font-medium">
                                        Lampiran:
                                      </h4>
                                      <div className="space-y-2">
                                        {message?.attachments.map(
                                          (attachment, index) => (
                                            <div
                                              key={index}
                                              className="flex items-center gap-2 rounded-md border p-2"
                                            >
                                              <File className="h-5 w-5 text-muted-foreground" />
                                              <div>
                                                <div className="font-medium">
                                                  {attachment.name}
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                  {attachment.size} •{" "}
                                                  {attachment.type}
                                                </div>
                                              </div>
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                className="ml-auto"
                                              >
                                                Unduh
                                              </Button>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                              <div className="border-t p-4">
                                <Button variant="outline" className="w-full">
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  Balas
                                </Button>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent
                          value="kontak"
                          className="h-[calc(100%-40px)]"
                        >
                          <div className="p-4">
                            <div className="mb-4 flex items-center gap-2">
                              <div className="relative flex-1">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                  type="search"
                                  placeholder="Cari kontak..."
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
                                    Filter Kontak
                                  </DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    Semua Kontak
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>Siswa</DropdownMenuItem>
                                  <DropdownMenuItem>Orang Tua</DropdownMenuItem>
                                  <DropdownMenuItem>Admin</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                              {contacts.map((contact) => (
                                <Card key={contact.id}>
                                  <CardHeader className="p-4">
                                    <div className="flex items-center gap-3">
                                      <Avatar className="h-10 w-10">
                                        <AvatarImage
                                          src={
                                            contact.avatar || "/placeholder.svg"
                                          }
                                          alt={contact.name}
                                        />
                                        <AvatarFallback>
                                          {contact.name.substring(0, 2)}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div>
                                        <CardTitle className="text-base">
                                          {contact.name}
                                        </CardTitle>
                                        <CardDescription>
                                          {contact.role}
                                        </CardDescription>
                                      </div>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="px-4 pb-2 pt-0">
                                    {contact.child && (
                                      <div className="mb-2 flex items-center gap-2 text-sm">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span>
                                          Orang Tua dari:{" "}
                                          <span className="font-medium">
                                            {contact.child}
                                          </span>
                                        </span>
                                      </div>
                                    )}
                                    {contact.class && (
                                      <div className="mb-2 flex items-center gap-2 text-sm">
                                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                                        <span>
                                          Kelas:{" "}
                                          <span className="font-medium">
                                            {contact.class}
                                          </span>
                                        </span>
                                      </div>
                                    )}
                                    <div className="mb-2 flex items-center gap-2 text-sm">
                                      <AtSign className="h-4 w-4 text-muted-foreground" />
                                      <span className="text-muted-foreground">
                                        email@example.com
                                      </span>
                                    </div>
                                  </CardContent>
                                  <CardFooter className="flex justify-between p-4 pt-2">
                                    <Button variant="ghost" size="sm">
                                      Lihat Profil
                                    </Button>
                                    <Button variant="outline" size="sm">
                                      <MessageSquare className="mr-2 h-4 w-4" />
                                      Kirim Pesan
                                    </Button>
                                  </CardFooter>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent
                          value="notifikasi"
                          className="h-[calc(100%-40px)]"
                        >
                          <div className="p-4">
                            <div className="mb-4 flex items-center justify-between">
                              <h3 className="font-medium">
                                Notifikasi Terbaru
                              </h3>
                              <Button variant="outline" size="sm">
                                Tandai Semua Dibaca
                              </Button>
                            </div>
                            <div className="space-y-4">
                              {notifications.map((notification) => (
                                <div
                                  key={notification.id}
                                  className={`flex items-start gap-4 rounded-lg border p-4 ${
                                    !notification.isRead
                                      ? "bg-blue-50 dark:bg-blue-950"
                                      : ""
                                  }`}
                                >
                                  <Bell className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                  <div className="space-y-1">
                                    <p className="font-medium">
                                      {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {notification.description}
                                    </p>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                      <Clock className="mr-1 h-3 w-3" />
                                      {notification.time}
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="ml-auto"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
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
              <Dialog open={composeOpen} onOpenChange={setComposeOpen}>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Tulis Pesan Baru</DialogTitle>
                    <DialogDescription>
                      Kirim pesan ke siswa, orang tua, atau staf sekolah.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="recipient" className="text-right">
                        Penerima
                      </Label>
                      <div className="col-span-3">
                        <Input id="recipient" placeholder="Pilih penerima..." />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="subject" className="text-right">
                        Subjek
                      </Label>
                      <div className="col-span-3">
                        <Input
                          id="subject"
                          placeholder="Masukkan subjek pesan..."
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="category" className="text-right">
                        Kategori
                      </Label>
                      <div className="col-span-3">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="akademik">Akademik</SelectItem>
                            <SelectItem value="izin">Izin</SelectItem>
                            <SelectItem value="tugas">Tugas</SelectItem>
                            <SelectItem value="pengumuman">
                              Pengumuman
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <Label htmlFor="message" className="text-right">
                        Pesan
                      </Label>
                      <div className="col-span-3">
                        <Textarea
                          id="message"
                          placeholder="Tulis pesan Anda di sini..."
                          className="h-32"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-start-2 col-span-3">
                        <Button variant="outline" className="gap-2">
                          <Paperclip className="h-4 w-4" />
                          Lampirkan File
                        </Button>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setComposeOpen(false)}
                    >
                      Batal
                    </Button>
                    <Button type="submit" onClick={() => setComposeOpen(false)}>
                      Kirim Pesan
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
