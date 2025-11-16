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



export const testimonials = [
  {
    title: "Outstanding Service",
    text: "PayConnect saved me 3 hours weekly managing household bills. The auto-pay feature is life-changing!.",
    author: "Amara T., Abidjan",
    role: "Office Manager",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    bgGradient: "from-blue-500/10 to-emerald-500/10",
    gradient: "from-blue-500 to-emerald-500"
  },
  {
    title: "Reliable & Professional",
    text: "Finally, an app that understands our needs in West Africa. Splitting bills with roommates is now effortless",
    author: "Jules K., Dakar",
    role: "Facility Director",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Highly Recommended",
    text: "As a small business owner, I use PayConnect for both personal and business expenses. The analytics help me track everything",
    author: "Fatou D., Cotonou",
    role: "Business Owner",
    rating: 5,
    bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    bgGradient: "from-teal-500/10 to-blue-500/10",
    gradient: "from-teal-500 to-blue-500"
  }
];


export const faqs = [
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "Is my financial data secure?",
        a: "Yes! We use bank-level encryption and never share your data with third parties."
      },
      {
        q: "How do you protect my payment information?",
        a: "We employ 256-bit SSL encryption, the same security standard used by major banks. Your payment details are tokenized and never stored in plain text on our servers."
      },
      {
        q: "Do you sell my data to advertisers?",
        a: "Absolutely not. Your privacy is paramount. We never sell, rent, or share your personal or financial information with third parties for marketing purposes."
      },
      {
        q: "What happens if my phone is stolen?",
        a: "Your account is protected by secure login credentials. Simply contact our support team immediately to freeze your account. You can also remotely log out from all devices through our web portal."
      }
    ]
  },
  {
    category: "Payment Methods & Fees",
    questions: [
      {
        q: "Which payment methods do you support?",
        a: "All major mobile money networks (Orange Money, MTN Mobile Money, etc.) and cards."
      },
      {
        q: "Is there a fee for using PayConnect?",
        a: "First 3 bill payments are FREE! Then low transaction fees apply."
      },
      {
        q: "Are there any hidden charges?",
        a: "No hidden fees ever! We display all applicable charges upfront before you confirm any payment. What you see is what you pay."
      },
      {
        q: "Can I pay bills internationally?",
        a: "Currently, PayConnect supports domestic bill payments. We're working on expanding to international payments in the near future."
      }
    ]
  },
  {
    category: "Bill Payments & Services",
    questions: [
      {
        q: "What types of bills can I pay?",
        a: "You can pay electricity, water, internet, mobile airtime, TV subscriptions, school fees, and many other recurring bills - all from one convenient platform."
      },
      {
        q: "Can I schedule automatic payments?",
        a: "Yes! Set up recurring payments for your regular bills and never miss a due date. You'll receive reminders before each payment is processed."
      },
      {
        q: "How long does a payment take to process?",
        a: "Most payments are processed instantly. Some billers may take up to 24 hours to reflect the payment in their system, but you'll receive immediate confirmation from PayConnect."
      },
      {
        q: "What if a payment fails?",
        a: "If a payment fails, you'll be notified immediately with the reason. Your account won't be charged, and you can retry the payment. Our support team is available 24/7 to assist."
      }
    ]
  },
  {
    category: "Account & Support",
    questions: [
      {
        q: "How do I create an account?",
        a: "Simply click 'Get Started' and register with your phone number or email. Verification takes less than 2 minutes, and you can start paying bills immediately."
      },
      {
        q: "Can I have multiple payment methods saved?",
        a: "Yes! Save multiple mobile money accounts and cards for quick checkout. Switch between them seamlessly when making payments."
      },
      {
        q: "How do I get payment receipts?",
        a: "Every transaction generates an instant digital receipt sent to your email and accessible in your PayConnect dashboard. You can download or print them anytime."
      },
      {
        q: "What if I need help or have an issue?",
        a: "Our customer support team is available 24/7 via live chat, email, or phone. We also have a comprehensive help center with guides and tutorials."
      },
      {
        q: "Can I track my payment history?",
        a: "Absolutely! Your dashboard shows complete payment history with filters by date, biller, and amount. Export reports for your records anytime."
      }
    ]
  }
];

