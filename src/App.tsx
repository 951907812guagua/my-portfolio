/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Play, 
  ArrowUpRight,
  X,
  Menu,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import liuTangImg from "./assets/liu-tang.jpg";
import chxsImg from "./assets/chxs.jpg";

import gongjiImg from "./assets/guojia-gongji-ri.png";
import anquanImg from "./assets/guojia-anquan-jiaoyu-ri.png";
import qiwenImg from "./assets/donglin-qiwen-ditu.png";
import xiaoqingImg from "./assets/xiying-xiaoqing.png";
import zhaoxinLaImg from "./assets/women-zhaoxin-la.png";
import zhanyiImg from "./assets/zhanyi-riji.png";
import bainianImg from "./assets/gedi-meishi-bainian.png";
import xinmeitiImg from "./assets/donglin-xinmeiti-zhaoxin.png";
import jiankangImg from "./assets/jiankang-xiaotieshi.png";
import kuaidiImg from "./assets/jinrifen-kuaidi-anquan-dida.png";
import xinshengImg from "./assets/xinsheng-baodao-zhinan.png";
import kaixueImg from "./assets/kaixue-xin-jihua.png";

import chongyangImg from "./assets/chongyang.png";
import lichunImg from "./assets/lichun.png";
import lixiaImg from "./assets/lixia.png";
import zhengrongImg from "./assets/zhengrong-youxi.png";
import igEsImg from "./assets/ig-es.png";
import igUpImg from "./assets/ig-up.png";
import igV5Img from "./assets/ig-v5.png";
import igLngImg from "./assets/ig-lng.png";
import igEdgImg from "./assets/ig-edg.png";
import igTesImg from "./assets/ig-tes.png";

// 东林新媒体招新
import zhaoxin1 from "./assets/zhaoxin-1.png";
import zhaoxin2 from "./assets/zhaoxin-2.png";
import zhaoxin3 from "./assets/zhaoxin-3.png";
import zhaoxin4 from "./assets/zhaoxin-4.png";
import zhaoxin5 from "./assets/zhaoxin-5.png";

// 秋季穿搭
import chuanda1 from "./assets/chuanda-1.png";
import chuanda2 from "./assets/chuanda-2.png";
import chuanda3 from "./assets/chuanda-3.png";
import chuanda4 from "./assets/chuanda-4.png";
import chuanda5 from "./assets/chuanda-5.png";

// 人像
import portrait1 from "./assets/portrait-1.jpg";
import portrait2 from "./assets/portrait-2.jpg";
import portrait3 from "./assets/portrait-3.jpg";
import portrait4 from "./assets/portrait-4.jpg";
import portrait5 from "./assets/portrait-5.jpg";

// 苏州
import sz1 from "./assets/sz-1.jpg";
import sz2 from "./assets/sz-2.jpg";
import sz3 from "./assets/sz-3.jpg";
import sz4 from "./assets/sz-4.jpg";
import sz5 from "./assets/sz-5.jpg";
import sz6 from "./assets/sz-6.jpg";
import sz7 from "./assets/sz-7.jpg";
import sz8 from "./assets/sz-8.jpg";

// 故宫
import gg1 from "./assets/gg-1.jpg";
import gg2 from "./assets/gg-2.jpg";
import gg3 from "./assets/gg-3.jpg";
import gg4 from "./assets/gg-4.jpg";
import gg5 from "./assets/gg-5.jpg";
import gg6 from "./assets/gg-6.jpg";
import gg7 from "./assets/gg-7.jpg";
import gg8 from "./assets/gg-8.jpg";

// The following images were not found in the assets folder, using placeholders for now
const donglin6thImg = "https://picsum.photos/seed/dl6th/1200/1800";
import gjaqImg from "./assets/gjaq.png";
import jwImg from "./assets/jw.png";
import taizhouCoverImg from "./assets/taizhou-cover.png";

type MainCategory = "设计作品" | "摄影作品" | "视频作品";
type SubCategory = "园林制图" | "公众号封面" | "海报" | "公众号长图" | "人像" | "风景" | "长视频" | "短视频" | "全部";

interface WorkItem {
  id: number;
  title: string;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  image: string;
  images?: string[]; // For grouped images like WeChat long images
  description: string;
  date: string;
  intro: string;
  modalTitle?: string; 
  modalTitles?: string[]; // For "Other" category where each image in a group has its own title
  modalDates?: string[];
  modalIntros?: string[];
  videoUrl?: string;
}

const generateWorks = (): WorkItem[] => {
  const works: WorkItem[] = [];
  let id = 1;

  // 设计作品 - 园林制图 (2张)
  works.push({ 
    id: id++, 
    title: "流淌", 
    mainCategory: "设计作品", 
    subCategory: "园林制图", 
    image: liuTangImg, 
    description: "专业的园林景观规划与制图展示。",
    date: "2022.05",
    intro: "第七届Garden花园杯三等奖获奖作品"
  });

  works.push({ 
    id: id++, 
    title: "潮花汐拾", 
    mainCategory: "设计作品", 
    subCategory: "园林制图", 
    image: chxsImg, 
    description: "专业的园林景观规划与制图展示。",
    date: "2022.11",
    intro: "文科杯参赛作品"
  });

  // 设计作品 - 公众号封面 (12张)
  const coverData = [
    { title: "国家公祭日", date: "2020.12", image: gongjiImg },
    { title: "国家安全教育日", date: "2021.04", image: anquanImg },
    { title: "东林气温地图", date: "2021.05", image: qiwenImg },
    { title: "喜迎校庆", date: "2021.07", image: xiaoqingImg },
    { title: "我们招新啦", date: "2021.09", image: zhaoxinLaImg },
    { title: "战疫日记", date: "2021.10", image: zhanyiImg },
    { title: "各地美食拜年", date: "2022.01", image: bainianImg },
    { title: "东林新媒体招新", date: "2022.03", image: xinmeitiImg },
    { title: "健康小贴士", date: "2022.04", image: jiankangImg },
    { title: "今日份快递安全到达", date: "2022.05", image: kuaidiImg },
    { title: "新生报道指南", date: "2022.08", image: xinshengImg },
    { title: "开学新计划", date: "2022.09", image: kaixueImg }
  ];

  coverData.forEach(item => {
    works.push({ 
      id: id++, 
      title: item.title, 
      mainCategory: "设计作品", 
      subCategory: "公众号封面", 
      image: item.image, 
      description: "东北林业大学官微推文封面设计。",
      date: item.date,
      intro: "东北林业大学官微推文封面"
    });
  });

  // 设计作品 - 海报 (13张)
  const posterData = [
    { title: "重阳", date: "2020.10", intro: "节气海报，发布于东北林业大学官微", image: chongyangImg },
    { title: "立春", date: "2021.02", intro: "节气海报，发布于东北林业大学官微", image: lichunImg },
    { title: "立夏", date: "2022.05", intro: "节气海报，发布于东北林业大学官微", image: lixiaImg },
    { title: "IG ES", date: "2021.01", intro: "赛事海报（非官方，微博粉丝超话海报组自发组织）", image: igEsImg },
    { title: "IG UP", date: "2021.06", intro: "赛事海报（非官方，微博粉丝超话海报组自发组织）", image: igUpImg },
    { title: "IG V5", date: "2021.07", intro: "赛事海报（非官方，微博粉丝超话海报组自发组织）", image: igV5Img },
    { title: "IG LNG", date: "2022.01", intro: "赛事海报（非官方，微博粉丝超话海报组自发组织）", image: igLngImg },
    { title: "IG EDG", date: "2022.02", intro: "赛事海报（非官方，微博粉丝超话海报组自发组织）", image: igEdgImg },
    { title: "IG TES", date: "2022.03", intro: "赛事海报（非官方，微博粉丝超话海报组自发组织）", image: igTesImg },
    { title: "东林新媒体六周年", date: "2020.12", intro: "活动海报，发布于东北林业大学官微", image: donglin6thImg },
    { title: "国家安全教育日", date: "2021.04", intro: "活动海报，发布于东北林业大学官微", image: gjaqImg },
    { title: "整容游戏", date: "2024.12", intro: "影视海报（非官方，作业需要）", image: zhengrongImg },
    { title: "精卫", date: "2025.05", intro: "影视海报（非官方，作业需要）", image: jwImg }
  ];

  posterData.forEach(item => {
    works.push({ 
      id: id++, 
      title: item.title, 
      mainCategory: "设计作品", 
      subCategory: "海报", 
      image: item.image, 
      description: "视觉冲击力强的海报设计。",
      date: item.date,
      intro: item.intro
    });
  });

  // 设计作品 - 公众号长图 (2组特定的作品，每组5张图)
  // 第一组：东林新媒体招新
  works.push({
    id: id++,
    title: "东林新媒体招新",
    mainCategory: "设计作品",
    subCategory: "公众号长图",
    image: zhaoxin1,
    images: [zhaoxin1, zhaoxin2, zhaoxin3, zhaoxin4, zhaoxin5],
    description: "东北林业大学新媒体中心招新推文长图",
    date: "2021.09",
    intro: "东北林业大学新媒体中心招新推文长图"
  });

  // 第二组：秋季穿搭
  works.push({
    id: id++,
    title: "秋季穿搭",
    mainCategory: "设计作品",
    subCategory: "公众号长图",
    image: chuanda1,
    images: [chuanda1, chuanda2, chuanda3, chuanda4, chuanda5],
    description: "东北林业大学新媒体中心秋季穿搭推文长图",
    date: "2022.10",
    intro: "东北林业大学新媒体中心秋季穿搭推文长图"
  });

  // 摄影作品 - 人像 (分开展示)
  [portrait1, portrait2, portrait3, portrait4, portrait5].forEach((img, index) => {
    works.push({
      id: id++,
      title: `人像-${index + 1}`,
      mainCategory: "摄影作品",
      subCategory: "人像",
      image: img,
      description: "捕捉人物神态与情感。",
      date: "2023.07",
      intro: "假期人像约拍"
    });
  });

  // 摄影作品 - 风景
  works.push({
    id: id++,
    title: "苏州",
    mainCategory: "摄影作品",
    subCategory: "风景",
    image: sz1,
    images: [sz1, sz2, sz3, sz4, sz5, sz6, sz7, sz8],
    description: "苏州园林与水乡风光。",
    date: "2023.03",
    intro: "拍摄于苏州"
  });

  works.push({
    id: id++,
    title: "北京故宫",
    mainCategory: "摄影作品",
    subCategory: "风景",
    image: gg1,
    images: [gg1, gg2, gg3, gg4, gg5, gg6, gg7, gg8],
    description: "北京故宫的红墙黄瓦。",
    date: "2023.03",
    intro: "拍摄于北京故宫"
  });
  
  // 视频作品
  works.push({
    id: id++,
    title: "“上证观区域”泰州篇",
    mainCategory: "视频作品",
    subCategory: "长视频",
    image: taizhouCoverImg,
    description: "上证报视频作品",
    date: "2026.01",
    intro: "协同记者完成前期策划、脚本润色及后期制作全流程，浏览达120w+。",
    videoUrl: "https://h.xinhuaxmt.com/vh512/share/12943455?docid=12943455&newstype=1001&d=135251e&channel=weixin"
  });

  works.push({
    id: id++,
    title: "短视频作品展示",
    mainCategory: "视频作品",
    subCategory: "短视频",
    image: "https://picsum.photos/seed/shortvideo/1200/800",
    description: "短视频作品",
    date: "2026.02",
    intro: "短视频作品展示",
  });

  return works;
};

const ALL_WORKS = generateWorks();

export default function App() {
  const [mainCat, setMainCat] = useState<MainCategory>("设计作品");
  const [subCat, setSubCat] = useState<SubCategory>("全部");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [showInfo, setShowInfo] = useState(false);

  const navigateWork = (direction: "prev" | "next") => {
    if (!selectedWork) return;

    // If the work has multiple images, navigate within the group
    if (selectedWork.images && selectedWork.images.length > 1) {
      if (direction === "next") {
        setCurrentImageIndex((prev) => (prev + 1) % selectedWork.images!.length);
      } else {
        setCurrentImageIndex((prev) => (prev - 1 + selectedWork.images!.length) % selectedWork.images!.length);
      }
      return;
    }
    
    const currentIndex = filteredWorks.findIndex(w => w.id === selectedWork.id);
    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % filteredWorks.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredWorks.length) % filteredWorks.length;
    }
    setSelectedWork(filteredWorks[nextIndex]);
    setCurrentImageIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedWork) return;
      if (e.key === "ArrowLeft") navigateWork("prev");
      if (e.key === "ArrowRight") navigateWork("next");
      if (e.key === "Escape") setSelectedWork(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWork, currentImageIndex]);

  // Reset view when changing work or image
  useEffect(() => {
    setScale(1);
    setShowInfo(false);
  }, [selectedWork, currentImageIndex]);

  const subCategories: Record<MainCategory, SubCategory[]> = {
    "设计作品": ["全部", "园林制图", "公众号封面", "海报", "公众号长图"],
    "摄影作品": ["全部", "人像", "风景"],
    "视频作品": ["全部", "长视频", "短视频"]
  };

  const filteredWorks = ALL_WORKS.filter(work => {
    const mainMatch = work.mainCategory === mainCat;
    const subMatch = subCat === "全部" || work.subCategory === subCat;
    return mainMatch && subMatch;
  });

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans font-black text-xl tracking-tighter uppercase"
        >
          ZHANG JIARUN
        </motion.div>
        
        <div className="hidden md:flex gap-12">
          <a href="#works" className="nav-link text-accent">Select Works</a>
          <a href="#info" className="nav-link">Info</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button 
          className="md:hidden z-50 p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-10">
              <a 
                href="#works" 
                className="font-display font-black text-6xl uppercase hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </a>
              <a 
                href="#info" 
                className="font-display font-black text-6xl uppercase hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Info
              </a>
              <a 
                href="#contact" 
                className="font-display font-black text-6xl uppercase hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
            
            <div className="absolute bottom-12 hidden md:flex flex-row gap-12 text-left">
              <a href="mailto:951907812@qq.com" className="micro-label hover:text-accent select-all">951907812@qq.com</a>
              <a href="tel:17858983996" className="micro-label hover:text-accent select-all">17858983996</a>
              <span className="micro-label hover:text-accent select-all">WeChat: Aurora_MaGem</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative"
            >
              <h1 className="editorial-title text-[22vw] text-accent">
                PORTFOLIO
              </h1>
              <h1 className="editorial-title text-[22vw] text-accent opacity-20 -mt-[10vw] ml-[5vw]">
                PORTFOLIO
              </h1>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[80vh] z-0"
          >
            <img 
              src="https://picsum.photos/seed/hero/1200/1600" 
              alt="Hero" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="absolute bottom-12 left-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span className="font-serif italic text-4xl text-accent">Visual Creator & Designer</span>
              <span className="micro-label">Based in China / Available Worldwide</span>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section id="info" className="py-40 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="micro-label text-accent mb-8 block">About Me</span>
                  
                  <div className="space-y-16">
                    {/* Education */}
                    <div className="space-y-6">
                      <h3 className="font-display font-black text-2xl uppercase tracking-tighter border-l-4 border-accent pl-4">Education</h3>
                      <div className="space-y-4">
                        {[
                          { school: "香港浸会大学", major: "影视与新媒体制片管理 · 硕士", date: "2024.09 - 2025.10" },
                          { school: "东北林业大学", major: "园林 · 本科", date: "2019.09 - 2023.06" }
                        ].map((edu, idx) => (
                          <motion.div 
                            key={idx}
                            whileHover={{ x: 10 }}
                            className="flex flex-col md:flex-row md:justify-between gap-2 group cursor-default"
                          >
                            <div className="flex flex-col">
                              <span className="text-xl font-bold group-hover:text-accent transition-colors">{edu.school}</span>
                              <span className="text-sm opacity-60">{edu.major}</span>
                            </div>
                            <span className="font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">{edu.date}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-6">
                      <h3 className="font-display font-black text-2xl uppercase tracking-tighter border-l-4 border-accent pl-4">Internship</h3>
                      <div className="space-y-6">
                        {[
                          { company: "上海证券报", role: "视频记者实习生 · 长三角新闻中心", date: "2025.11 - 2026.03" },
                          { company: "民泰银行金华分行", role: "文宣实习生", date: "2024.12 - 2025.03" },
                          { company: "金华电视台", role: "采编实习生", date: "2023.06 - 2023.09" }
                        ].map((intern, idx) => (
                          <motion.div 
                            key={idx}
                            whileHover={{ x: 10 }}
                            className="flex flex-col md:flex-row md:justify-between gap-2 group cursor-default"
                          >
                            <div className="flex flex-col">
                              <span className="text-xl font-bold group-hover:text-accent transition-colors">{intern.company}</span>
                              <span className="text-sm opacity-60">{intern.role}</span>
                            </div>
                            <span className="font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">{intern.date}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-12">
                  <motion.div whileHover={{ y: -5, scale: 1.05 }} className="flex flex-col gap-2 cursor-default">
                    <span className="micro-label">MBTI</span>
                    <span className="text-3xl font-display font-black text-accent uppercase">ISFP</span>
                  </motion.div>
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} className="flex flex-col gap-2 cursor-default">
                    <span className="micro-label">SKILLS</span>
                    <div className="text-3xl font-display font-black text-accent uppercase leading-tight max-w-md">
                      Ps / SAI / illustrator / Pr / CAD / lumion / PPT / Excel / MySQL
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5, scale: 1.05 }} className="flex flex-col gap-2 cursor-default">
                    <span className="micro-label">LANGUAGE</span>
                    <span className="text-3xl font-display font-black text-accent uppercase">CET4 / CET6</span>
                  </motion.div>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] overflow-hidden grayscale"
                >
                  <img 
                    src="https://picsum.photos/seed/me/800/1200" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent flex items-center justify-center p-8 text-white">
                  <span className="font-display font-black text-6xl leading-none">ZJR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-40 px-6 bg-accent text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div>
                <span className="micro-label text-white/60 mb-4 block">Portfolio</span>
                <h2 className="editorial-title text-8xl">Select Works</h2>
              </div>
              
              <div className="flex flex-col items-end gap-6">
                <div className="flex flex-wrap justify-end gap-4">
                  {(["设计作品", "摄影作品", "视频作品"] as MainCategory[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setMainCat(cat); setSubCat("全部"); }}
                      className={`font-sans font-bold text-xs uppercase tracking-widest pb-2 border-b-2 transition-all ${
                        mainCat === cat ? "border-white text-white" : "border-transparent text-white/40 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap justify-end gap-3">
                  {subCategories[mainCat].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSubCat(sub)}
                      className={`px-4 py-1 rounded-full border text-[10px] uppercase tracking-tighter transition-all ${
                        subCat === sub 
                          ? "bg-white text-accent border-white" 
                          : "bg-transparent text-white/60 border-white/20 hover:border-white/60 hover:text-white"
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatePresence mode="popLayout">
                {filteredWorks.map((work, index) => (
                  <motion.div
                    layout
                    key={work.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setSelectedWork(work);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <div className="overflow-hidden mb-6 relative bg-white/5 rounded-lg flex items-center justify-center">
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white text-accent flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                          {work.videoUrl ? <Play size={32} className="ml-1" /> : <ArrowRight size={32} />}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-black text-3xl uppercase mb-2">{work.title}</h3>
                        <span className="micro-label text-white/60">{work.subCategory}</span>
                      </div>
                      <span className="font-serif italic text-xl">0{index + 1}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-60 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="micro-label text-accent mb-12 block">Get in touch</span>
            
            <div className="w-full max-w-5xl flex flex-col gap-16 md:gap-24">
              <div className="group">
                <span className="micro-label text-ink/40 mb-4 block uppercase tracking-widest">Email</span>
                <a 
                  href="mailto:951907812@qq.com" 
                  className="font-display font-black text-[8vw] md:text-[6vw] leading-none hover:text-accent transition-colors break-all select-all"
                >
                  951907812@qq.com
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32">
                <div className="group">
                  <span className="micro-label text-ink/40 mb-4 block uppercase tracking-widest">Phone</span>
                  <a 
                    href="tel:17858983996" 
                    className="font-display font-black text-4xl md:text-5xl lg:text-6xl hover:text-accent transition-colors select-all"
                  >
                    17858983996
                  </a>
                </div>

                <div className="group">
                  <span className="micro-label text-ink/40 mb-4 block uppercase tracking-widest">WeChat</span>
                  <span 
                    className="font-display font-black text-4xl md:text-5xl lg:text-6xl hover:text-accent transition-colors select-all inline-block"
                  >
                    Aurora_MaGem
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="micro-label">© 2026 ZHANG JIARUN</span>
        <span className="micro-label">Visual Creator & Designer</span>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col overflow-hidden"
          >
            {/* Top Bar - Minimal Controls */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center z-[110] pointer-events-none">
              <div className="flex flex-col pointer-events-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showInfo ? 1 : 0, x: showInfo ? 0 : -20 }}
                  className="bg-black/40 backdrop-blur-md p-4 rounded-lg border border-white/10"
                >
                  <span className="micro-label text-accent">{selectedWork.subCategory}</span>
                  <h2 className="font-display font-black text-xl text-white uppercase tracking-tighter">
                    {selectedWork.modalTitles ? selectedWork.modalTitles[currentImageIndex] : (selectedWork.modalTitle || selectedWork.title)}
                  </h2>
                </motion.div>
              </div>
              
              <div className="flex gap-4 pointer-events-auto items-center">
                {/* Desktop Zoom Controls - Integrated into top bar */}
                <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mr-2">
                  <button onClick={() => setScale(Math.max(1, scale - 0.5))} className="text-white/40 hover:text-white transition-colors px-2">-</button>
                  <div className="w-px h-4 bg-white/10"></div>
                  <button onClick={() => setScale(Math.min(5, scale + 0.5))} className="text-white/40 hover:text-white transition-colors px-2">+</button>
                  {scale > 1 && (
                    <>
                      <div className="w-px h-4 bg-white/10"></div>
                      <button 
                        onClick={() => setScale(1)}
                        className="micro-label text-accent hover:text-white transition-colors px-2"
                      >
                        1:1
                      </button>
                    </>
                  )}
                </div>

                <button 
                  onClick={() => setShowInfo(!showInfo)}
                  className={`p-3 transition-all rounded-full border border-white/10 backdrop-blur-md ${showInfo ? 'bg-accent text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  title="Toggle Info"
                >
                  <div className="w-6 h-6 flex items-center justify-center font-serif italic font-bold">i</div>
                </button>
                <button 
                  onClick={() => setSelectedWork(null)}
                  className="p-3 bg-white/10 text-white hover:bg-accent hover:text-white transition-all rounded-full border border-white/10 backdrop-blur-md"
                  title="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Main Content Area - Zoomable & Pannable */}
            <div 
              className="flex-1 relative flex items-center justify-center overflow-hidden touch-none"
              onWheel={(e) => {
                if (e.deltaY < 0) {
                  setScale(Math.min(5, scale + 0.2));
                } else {
                  setScale(Math.max(1, scale - 0.2));
                }
              }}
            >
              {/* Navigation Arrows - Very subtle, hidden when zoomed */}
              {scale === 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateWork("prev"); }}
                    className="absolute left-4 z-[110] p-4 text-white/20 hover:text-white hover:bg-white/10 transition-all rounded-full"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateWork("next"); }}
                    className="absolute right-4 z-[110] p-4 text-white/20 hover:text-white hover:bg-white/10 transition-all rounded-full"
                    aria-label="Next"
                  >
                    <ChevronRight size={48} />
                  </button>
                </>
              )}

              {/* Image Container with Drag & Zoom */}
              <div 
                className="w-full h-full flex items-center justify-center cursor-move"
                onDoubleClick={() => setScale(scale === 1 ? 2.5 : 1)}
              >
                <motion.div
                  key={selectedWork.images ? selectedWork.images[currentImageIndex] : selectedWork.image}
                  drag={scale > 1 ? true : "x"}
                  dragConstraints={scale > 1 ? { left: -1000, right: 1000, top: -1000, bottom: 1000 } : { left: 0, right: 0 }}
                  dragElastic={scale > 1 ? 0.1 : 0.2}
                  onDragEnd={(e, info) => {
                    if (scale === 1) {
                      const threshold = 50;
                      if (info.offset.x > threshold) navigateWork("prev");
                      else if (info.offset.x < -threshold) navigateWork("next");
                    }
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: scale,
                    x: scale === 1 ? 0 : undefined,
                    y: scale === 1 ? 0 : undefined
                  }}
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  className="relative flex items-center justify-center"
                >
                  <img 
                    src={selectedWork.images ? selectedWork.images[currentImageIndex] : selectedWork.image} 
                    alt={selectedWork.title} 
                    className="max-w-screen max-h-screen object-contain select-none pointer-events-none" 
                    referrerPolicy="no-referrer" 
                  />
                  {selectedWork.videoUrl && (
                    <a 
                      href={selectedWork.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group pointer-events-auto cursor-pointer"
                    >
                      <div className="w-24 h-24 rounded-full bg-accent/90 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-2xl">
                        <Play size={48} fill="currentColor" className="ml-2" />
                      </div>
                    </a>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Bottom Bar - Info Toggle (Desktop/Tablet/Mobile) */}
            <div className="absolute bottom-0 w-full p-8 flex flex-col items-center gap-6 z-[110] pointer-events-none">
              {/* Info Overlay */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="max-w-2xl w-full bg-black/80 backdrop-blur-2xl p-6 rounded-2xl border border-white/10 pointer-events-auto shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-serif italic text-xl text-accent">
                        {selectedWork.modalDates ? selectedWork.modalDates[currentImageIndex] : selectedWork.date}
                      </span>
                      <div className="h-px flex-1 bg-white/10"></div>
                      {selectedWork.images && (
                        <span className="micro-label text-white/40">
                          {currentImageIndex + 1} / {selectedWork.images.length}
                        </span>
                      )}
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base mb-6">
                      {selectedWork.modalIntros ? selectedWork.modalIntros[currentImageIndex] : selectedWork.intro}
                    </p>
                    {selectedWork.videoUrl && (
                      <a 
                        href={selectedWork.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-display font-black uppercase tracking-tighter hover:bg-white hover:text-accent transition-all group"
                      >
                        <Play size={20} fill="currentColor" />
                        观看完整视频
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hint for mobile/tablet */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 micro-label text-white/20 pointer-events-none md:hidden text-center">
              双击缩放 • 滑动切换 • 拖拽移动
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
