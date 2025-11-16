import {
  Users,
  Globe2,
  Headphones,
  CheckCircle,
  LayoutGrid,
  Zap,
  Globe,
  TrendingUp,
  Calendar,
  Bell,
  FileText,
  Settings,
  Clock,
  AlertCircle,
  Share2,
  Activity,
  DollarSign,
  Smartphone,
  Monitor,
  Wifi,
} from "lucide-react";

export const statsData = [
  { icon: Users, value: "50k+", label: "Active Users" },
  { icon: Globe2, value: "3", label: "Countries" },
  { icon: Headphones, value: "24/7", label: "Support Available" },
  { icon: CheckCircle, value: "99.9%", label: "Uptime Record" },
];

export const solutionData = [
  {
    icon: LayoutGrid,
    title: "Single Dashboard",
    desc: "See all your bills in one place - electricity, water, TV, airtime, and more",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: Users,
    title: "Split Bills Easily",
    desc: "Divide costs with friends and track payments in real-time",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    icon: Smartphone,
    title: "Auto Payments",
    desc: "Set and forget with custom automation for all your payments",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    icon: Globe,
    title: "Pan-African",
    desc: "Pay bills across multiple African countries",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: TrendingUp,
    title: "Smart Predictions",
    desc: "Get AI-powered bill forecasts and due date reminders",
    gradient: "from-rose-500 to-red-600",
    bgGradient: "from-rose-50 to-red-50",
  },
];

export const featuresData = [
  {
    title: "Unified Bill Management",
    icon: Calendar,
    gradient: "from-emerald-500 to-blue-500",
    bgGradient: "from-emerald-50 to-blue-50",
    features: [
      { text: "All bills in one chronological timeline", icon: Calendar },
      { text: "Due date alerts and predictions", icon: Bell },
      { text: "Payment history and downloadable receipts", icon: FileText },
      { text: "Spending analytics and insights", icon: TrendingUp },
    ],
  },
  {
    title: "Automation Power",
    icon: Zap,
    gradient: "from-blue-500 to-emerald-500",
    bgGradient: "from-blue-50 to-emerald-50",
    features: [
      { text: "Auto-renew data bundles", icon: Zap },
      { text: "Custom payment rules", icon: Settings },
      { text: "Scheduled bill payments", icon: Clock },
      { text: "Smart budget alerts", icon: AlertCircle },
    ],
  },
  {
    title: "Social Payments",
    icon: Users,
    gradient: "from-emerald-500 to-blue-500",
    bgGradient: "from-emerald-50 to-blue-50",
    features: [
      { text: "Split bills with anyone", icon: Users },
      { text: "Share payment links via WhatsApp", icon: Share2 },
      { text: "Real-time payment tracking", icon: Activity },
      { text: "Group expense management", icon: DollarSign },
    ],
  },
  {
    title: "Cross-Platform",
    icon: Smartphone,
    gradient: "from-blue-500 to-emerald-500",
    bgGradient: "from-blue-50 to-emerald-50",
    features: [
      { text: "Progressive Web App - no storage needed", icon: Monitor },
      { text: "Works on all devices", icon: Smartphone },
      { text: "Offline capability", icon: Wifi },
      { text: "French & English support", icon: Globe },
    ],
  },
];
