import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Smartphone, 
  CreditCard, 
  Banknote,
  FileText,
  Shield,
  Zap,
  Home,
  Car,
  Heart,
  Briefcase,
  GraduationCap,
  Users,
  Phone,
  Wifi,
  Truck,
  Factory,
  Landmark,
  Receipt,
  Award,
  Globe,
  Settings,
  Database,
  Lock,
  Search,
  Calendar,
  MapPin,
  Mail,
  Camera,
  Printer,
  Monitor,
  HardDrive,
  Cloud,
  Network,
  Server,
  Cpu,
  Battery,
  Signal,
  Radio,
  Tv,
  Music,
  Video,
  Image,
  Book,
  Newspaper,
  PenTool,
  Edit,
  Save,
  Download,
  Upload,
  Share,
  Copy,
  Trash,
  Archive,
  Folder,
  File,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Star,
  Flag,
  Tag,
  Bookmark,
  Link,
  ExternalLink,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Filter,
  Layers,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Grid,
  BarChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Compass,
  Navigation,
  Anchor,
  Send,
  MessageSquare,
  MessageCircle,
  Bell,
  BellOff,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  Bluetooth,
  Wifi as WifiIcon,
  Rss,
  Power,
  Refresh,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Sidebar,
  Layout,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Coffee,
  Gift,
  ShoppingCart,
  ShoppingBag,
  Package,
  Truck as TruckIcon,
  Plane,
  Train,
  Bus,
  Bike,
  Walk,
  MapPin as MapPinIcon,
  Map,
  Globe as GlobeIcon,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Umbrella,
  Thermometer,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Sunrise,
  Sunset,
  Clock,
  Timer,
  Stopwatch,
  AlarmClock,
  Calendar as CalendarIcon,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserCircle,
  Contact,
  Contacts,
  Phone as PhoneIcon,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Voicemail,
  MessageSquare as MessageSquareIcon,
  Mail as MailIcon,
  MailOpen,
  Send as SendIcon,
  Inbox,
  Outbox,
  Archive as ArchiveIcon,
  Trash as TrashIcon,
  Spam,
  AtSign,
  Hash,
  DollarSign,
  Percent,
  Euro,
  Pound,
  Yen,
  IndianRupee,
  Bitcoin,
  Coins,
  Wallet,
  CreditCard as CreditCardIcon,
  Banknote as BanknoteIcon,
  Receipt as ReceiptIcon,
  Calculator,
  PiggyBank,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  LineChart,
  ScatterChart,
  Activity as ActivityIcon,
  Pulse,
  Zap as ZapIcon,
  Battery as BatteryIcon,
  BatteryLow,
  Plug,
  Power as PowerIcon,
  Lightbulb,
  Flashlight,
  Lamp,
  Candle,
  Fire,
  Flame as FlameIcon,
  Snowflake as SnowflakeIcon,
  Thermometer as ThermometerIcon,
  Gauge,
  Speedometer,
  Fuel,
  Oil,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Scissors,
  Paperclip,
  Pin,
  Pushpin,
  Thumbtack,
  Magnet,
  Key,
  Lock as LockIcon,
  Unlock,
  Shield as ShieldIcon,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  Camera as CameraIcon,
  Video as VideoIcon,
  Film,
  Clapperboard,
  Image as ImageIcon,
  Images,
  Palette,
  Paintbrush,
  Brush,
  Pen,
  Pencil,
  PenTool as PenToolIcon,
  Edit as EditIcon,
  Edit2,
  Edit3,
  Eraser,
  Highlighter,
  Marker,
  Ruler,
  Compass as CompassIcon,
  Triangle as TriangleIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon,
  Star as StarIcon,
  Heart as HeartIconDupe,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Angry,
  Laugh,
  Wink,
  Kiss,
  Surprised,
  Confused,
  Expressionless,
  Neutral,
  Sleeping,
  Dizzy,
  Sick,
  Mask,
  Sunglasses,
  Glasses,
  Monocle,
  Mustache,
  Beard,
  Crown,
  TopHat,
  Graduation,
  Medal,
  Trophy,
  Award as AwardIcon,
  Ribbon,
  Rosette,
  Badge,
  Certificate,
  Diploma,
  Scroll,
  Book as BookIcon,
  BookOpen,
  Books,
  Library,
  Bookmark as BookmarkIcon,
  BookmarkPlus,
  BookmarkMinus,
  BookmarkCheck,
  BookmarkX,
  Newspaper as NewspaperIcon,
  FileText as FileTextIcon,
  File as FileIcon,
  Files,
  Folder as FolderIcon,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderCheck,
  FolderX,
  Archive as ArchiveIconDupe,
  Package as PackageIcon,
  Package2,
  PackageOpen,
  PackageCheck,
  PackageX,
  PackagePlus,
  PackageMinus,
  PackageSearch,
  Box,
  Boxes,
  Container,
  Crate,
  Pallet,
  Forklift,
  Warehouse,
  Factory as FactoryIcon,
  Building,
  Building2 as Building2Icon,
  Home as HomeIcon,
  House,
  Store,
  Shop,
  ShoppingCart as ShoppingCartIcon,
  ShoppingBag as ShoppingBagIcon,
  Basket,
  Cart,
  Trolley,
  Checkout,
  CashRegister,
  PointOfSale,
  Barcode as BarcodeIcon,
  QrCode as QrCodeIcon,
  Scan as ScanIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Sort,
  SortAsc,
  SortDesc,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  ArrowLeftRight,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowBigUp,
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftUp,
  CornerLeftDown,
  CornerRightUp,
  CornerRightDown,
  Move as MoveIcon,
  Move3d,
  MousePointer,
  MousePointer2,
  Hand,
  Grab,
  GrabHand,
  PointerHand,
  TouchHand,
  Fingerprint as FingerprintIcon,
  Footprints,
  Paw,
  PawPrint,
  Bone,
  Fish,
  Bird,
  Bug,
  Butterfly,
  Flower,
  Flower2,
  Leaf,
  Tree,
  TreePine,
  Palmtree,
  Cactus,
  Seedling,
  Sprout,
  Wheat,
  Corn,
  Carrot,
  Apple,
  Cherry,
  Grape,
  Lemon,
  Orange,
  Banana,
  Strawberry,
  Watermelon,
  Coconut,
  Avocado,
  Egg,
  Milk,
  Cheese,
  Bread,
  Croissant,
  Bagel,
  Pretzel,
  Pizza,
  Hamburger,
  Hotdog,
  Sandwich,
  Taco,
  Burrito,
  Salad,
  Soup,
  Stew,
  Curry,
  Rice,
  Noodles,
  Spaghetti,
  Ramen,
  Dumpling,
  Sushi,
  Bento,
  Cake,
  Cupcake,
  Pie,
  Cookie,
  Candy,
  Chocolate,
  Lollipop,
  IceCream,
  Donut,
  Honey,
  Jam,
  Butter,
  Salt,
  Pepper,
  Spice,
  Herb,
  Garlic,
  Onion,
  Tomato,
  Potato,
  Mushroom,
  Broccoli,
  Lettuce,
  Cabbage,
  Spinach,
  Kale,
  Celery,
  Cucumber,
  Pickle,
  Radish,
  Turnip,
  Beet,
  Pumpkin,
  Squash,
  Zucchini,
  Eggplant,
  Pepper as PepperIcon,
  Chili,
  Jalapeno,
  Habanero,
  Ghost,
  Carolina,
  Scotch,
  Thai,
  Cayenne,
  Paprika,
  Turmeric,
  Ginger,
  Cinnamon,
  Nutmeg,
  Clove,
  Cardamom,
  Fennel,
  Cumin,
  Coriander,
  Mustard,
  Sesame,
  Poppy,
  Sunflower,
  Peanut,
  Almond,
  Walnut,
  Pecan,
  Cashew,
  Pistachio,
  Hazelnut,
  Macadamia,
  Brazil,
  Pine,
  Chestnut,
  Acorn,
  Coconut as CoconutIcon,
  Date,
  Fig,
  Raisin,
  Prune,
  Apricot,
  Peach,
  Plum,
  Nectarine,
  Pear,
  Quince,
  Persimmon,
  Pomegranate,
  Kiwi,
  Mango,
  Papaya,
  Passion,
  Dragon,
  Star as StarFruit,
  Lychee,
  Rambutan,
  Longan,
  Durian,
  Jackfruit,
  Breadfruit,
  Plantain,
  Yam,
  Taro,
  Cassava,
  Sweet,
  Purple,
  Russet,
  Fingerling,
  New,
  Red,
  White,
  Yellow,
  Blue,
  Green,
  Orange as OrangeColor,
  Pink,
  Purple as PurpleColor,
  Brown,
  Black,
  Gray,
  Silver,
  Gold,
  Bronze,
  Copper,
  Brass,
  Steel,
  Iron,
  Aluminum,
  Titanium,
  Platinum,
  Palladium,
  Rhodium,
  Iridium,
  Osmium,
  Ruthenium,
  Rhenium,
  Tungsten,
  Molybdenum,
  Chromium,
  Vanadium,
  Manganese,
  Cobalt,
  Nickel,
  Zinc,
  Gallium,
  Germanium,
  Arsenic,
  Selenium,
  Bromine,
  Krypton,
  Rubidium,
  Strontium,
  Yttrium,
  Zirconium,
  Niobium,
  Technetium,
  Ruthenium as RutheniumDupe,
  Rhodium as RhodiumDupe,
  Palladium as PalladiumDupe,
  Silver as SilverDupe,
  Cadmium,
  Indium,
  Tin,
  Antimony,
  Tellurium,
  Iodine,
  Xenon,
  Cesium,
  Barium,
  Lanthanum,
  Cerium,
  Praseodymium,
  Neodymium,
  Promethium,
  Samarium,
  Europium,
  Gadolinium,
  Terbium,
  Dysprosium,
  Holmium,
  Erbium,
  Thulium,
  Ytterbium,
  Lutetium,
  Hafnium,
  Tantalum,
  Tungsten as TungstenDupe,
  Rhenium as RheniumDupe,
  Osmium as OsmiumDupe,
  Iridium as IridiumDupe,
  Platinum as PlatinumDupe,
  Gold as GoldDupe,
  Mercury,
  Thallium,
  Lead,
  Bismuth,
  Polonium,
  Astatine,
  Radon,
  Francium,
  Radium,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson,
  Mountain
} from 'lucide-react';

interface Service {
  id: number;
  provider: string;
  serviceName: string;
  type: string;
}

const ServicesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 15;

  const allServices: Service[] = [
    { id: 1, provider: "AAVAS FINANCIERS LIMITED", serviceName: "Aavas Home Loan Lead Generation", type: "B2C" },
    { id: 2, provider: "ABHICHAL SERVICES PVT LTD", serviceName: "Abhichalpe mobile and DTH recharge", type: "B2C" },
    { id: 3, provider: "ABHICHAL SERVICES PVT LTD", serviceName: "Abhichalpe DMT service", type: "B2C" },
    { id: 4, provider: "ADIYOGI ONLINE TRADE PRIVATE LIMITED", serviceName: "Adiyogi - Apply for New PAN CARD and correction in PAN CARD", type: "B2C" },
    { id: 5, provider: "AGRICULTURE DEPARTMENT", serviceName: "Application for Sub Mission on Agro Forestry", type: "G2C" },
    { id: 6, provider: "AGRICULTURE DEPARTMENT", serviceName: "Application for grant of License to sell stock or exhibit for sale or distribute Insecticide", type: "G2C" },
    { id: 7, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture - Subsidy on Barbed Wire Fencing", type: "G2C" },
    { id: 8, provider: "AGRICULTURE DEPARTMENT", serviceName: "eKYC - PM Kisan", type: "G2C" },
    { id: 9, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture - Registration Fees For Manufacturers-Plastic lining-Pipeline", type: "G2B" },
    { id: 10, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture - Seed Production Program", type: "G2C" },
    { id: 11, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture Subsidy on Diggi", type: "G2C" },
    { id: 12, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture - Application For Farm Ponds Subsidy", type: "G2C" },
    { id: 13, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture Subsidy on Farm Implements", type: "G2C" },
    { id: 14, provider: "AGRICULTURE DEPARTMENT", serviceName: "Application Form Fee For Manufacturers (Plastic lining,Pipeline)", type: "G2C" },
    { id: 15, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture Subsidy on Irrigation Pipeline", type: "G2C" },
    { id: 16, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agriculture Subsidy on Water Storage Tank", type: "G2C" },
    { id: 17, provider: "AGRICULTURE DEPARTMENT", serviceName: "Agricultural inputs license for seeds, fertilizers, insecticides", type: "G2C" },
    { id: 18, provider: "AGRICULTURE MARKETING", serviceName: "MAHATMA JYOTIBA POOLE MANDI SHRAMIK KALYAN YOJNA", type: "G2C" },
    { id: 19, provider: "AGRICULTURE MARKETING", serviceName: "Trader License Registration Fee", type: "G2B" },
    { id: 20, provider: "AGRICULTURE MARKETING", serviceName: "Mukhyamantri Krishak Sathi Sahayata Yojna", type: "G2C" },
    { id: 21, provider: "AIRTEL", serviceName: "Airtel Mobile Postpaid Bill", type: "B2C" },
    { id: 22, provider: "AIRTEL", serviceName: "Airtel Recharge Service", type: "B2C" },
    { id: 23, provider: "ATISHAY LIMITED", serviceName: "Zapurse PAN Service", type: "B2C" },
    { id: 24, provider: "ATISHAY LIMITED", serviceName: "Atishay - Quick Pay of AEPS", type: "B2C" },
    { id: 25, provider: "ATISHAY LIMITED", serviceName: "Atishay - AEPS Registration", type: "B2C" },
    { id: 26, provider: "ATISHAY LIMITED", serviceName: "Atishay AEPS Cash Withdrawal", type: "B2C" },
    { id: 27, provider: "ATISHAY LIMITED", serviceName: "Zapurse - Recharge - Atishay Limited", type: "B2C" },
    { id: 28, provider: "ATISHAY LIMITED", serviceName: "Zapurse Fasttag Service", type: "B2C" },
    { id: 29, provider: "ATISHAY LIMITED", serviceName: "Domestic Money Transfer - Zapurse - Atishay limited", type: "B2C" },
    { id: 30, provider: "AU INSURANCE BROKING SERVICES PVT LTD", serviceName: "AU Insurance", type: "B2C" },
    { id: 31, provider: "BANSARI E SOLUTIONS PVT LTD", serviceName: "Bansari eSolution - Insurance Premium Payment", type: "B2C" },
    { id: 32, provider: "BHARTI AIRTEL LIMITED", serviceName: "Airtel Digital TV Recharge", type: "B2C" },
    { id: 33, provider: "BHARTI AIRTEL LIMITED", serviceName: "Airtel Broadband Bill Payment", type: "B2C" },
    { id: 34, provider: "BHARTI AIRTEL LIMITED", serviceName: "Airtel Landline Bill Payment", type: "B2C" },
    { id: 35, provider: "BSNL", serviceName: "BSNL Mobile Prepaid Recharge", type: "B2C" },
    { id: 36, provider: "BSNL", serviceName: "BSNL Mobile Postpaid Bill", type: "B2C" },
    { id: 37, provider: "BSNL", serviceName: "BSNL Landline Bill Payment", type: "B2C" },
    { id: 38, provider: "BSNL", serviceName: "BSNL Broadband Bill Payment", type: "B2C" },
    { id: 39, provider: "CANARA BANK", serviceName: "Canara Bank Account Opening", type: "B2C" },
    { id: 40, provider: "CANARA BANK", serviceName: "Canara Bank Money Transfer", type: "B2C" },
    { id: 41, provider: "CENTRAL BANK OF INDIA", serviceName: "Central Bank Account Services", type: "B2C" },
    { id: 42, provider: "CENTRAL BANK OF INDIA", serviceName: "Central Bank Loan Application", type: "B2C" },
    { id: 43, provider: "CHIEF MINISTER OFFICE", serviceName: "CM Helpline Registration", type: "G2C" },
    { id: 44, provider: "CHIEF MINISTER OFFICE", serviceName: "Rajasthan Sampark Portal", type: "G2C" },
    { id: 45, provider: "CIVIL DEFENCE", serviceName: "Civil Defence Volunteer Registration", type: "G2C" },
    { id: 46, provider: "CIVIL DEFENCE", serviceName: "Emergency Response Training", type: "G2C" },
    { id: 47, provider: "COOPERATIVE DEPARTMENT", serviceName: "Cooperative Society Registration", type: "G2C" },
    { id: 48, provider: "COOPERATIVE DEPARTMENT", serviceName: "Self Help Group Formation", type: "G2C" },
    { id: 49, provider: "DEPARTMENT OF INFORMATION TECHNOLOGY", serviceName: "Digital Literacy Program", type: "G2C" },
    { id: 50, provider: "DEPARTMENT OF INFORMATION TECHNOLOGY", serviceName: "E-Governance Services", type: "G2C" },
    { id: 51, provider: "DIRECTORATE OF ECONOMICS & STATISTICS", serviceName: "Statistical Data Services", type: "G2C" },
    { id: 52, provider: "DIRECTORATE OF ECONOMICS & STATISTICS", serviceName: "Economic Survey Registration", type: "G2C" },
    { id: 53, provider: "EDUCATION DEPARTMENT", serviceName: "School Admission Application", type: "G2C" },
    { id: 54, provider: "EDUCATION DEPARTMENT", serviceName: "Scholarship Application", type: "G2C" },
    { id: 55, provider: "EDUCATION DEPARTMENT", serviceName: "Teacher Transfer Application", type: "G2C" },
    { id: 56, provider: "EDUCATION DEPARTMENT", serviceName: "Educational Certificate Verification", type: "G2C" },
    { id: 57, provider: "ELECTRICITY BOARD", serviceName: "New Electricity Connection", type: "G2C" },
    { id: 58, provider: "ELECTRICITY BOARD", serviceName: "Electricity Bill Payment", type: "G2C" },
    { id: 59, provider: "ELECTRICITY BOARD", serviceName: "Load Enhancement Application", type: "G2C" },
    { id: 60, provider: "ELECTRICITY BOARD", serviceName: "Meter Change Request", type: "G2C" },
    { id: 61, provider: "EMPLOYMENT DEPARTMENT", serviceName: "Job Registration", type: "G2C" },
    { id: 62, provider: "EMPLOYMENT DEPARTMENT", serviceName: "Unemployment Allowance", type: "G2C" },
    { id: 63, provider: "EMPLOYMENT DEPARTMENT", serviceName: "Skill Development Program", type: "G2C" },
    { id: 64, provider: "EMPLOYMENT DEPARTMENT", serviceName: "Employment Exchange Registration", type: "G2C" },
    { id: 65, provider: "FINANCE DEPARTMENT", serviceName: "Pension Application", type: "G2C" },
    { id: 66, provider: "FINANCE DEPARTMENT", serviceName: "Treasury Services", type: "G2C" },
    { id: 67, provider: "FINANCE DEPARTMENT", serviceName: "Government Employee Salary", type: "G2C" },
    { id: 68, provider: "FINANCE DEPARTMENT", serviceName: "Provident Fund Services", type: "G2C" },
    { id: 69, provider: "FOOD & CIVIL SUPPLIES", serviceName: "Ration Card Application", type: "G2C" },
    { id: 70, provider: "FOOD & CIVIL SUPPLIES", serviceName: "Fair Price Shop License", type: "G2B" },
    { id: 71, provider: "FOOD & CIVIL SUPPLIES", serviceName: "Food Security Scheme", type: "G2C" },
    { id: 72, provider: "FOOD & CIVIL SUPPLIES", serviceName: "Antyodaya Anna Yojana", type: "G2C" },
    { id: 73, provider: "FOREST DEPARTMENT", serviceName: "Tree Cutting Permission", type: "G2C" },
    { id: 74, provider: "FOREST DEPARTMENT", serviceName: "Forest Land Lease", type: "G2C" },
    { id: 75, provider: "FOREST DEPARTMENT", serviceName: "Wildlife Protection Services", type: "G2C" },
    { id: 76, provider: "FOREST DEPARTMENT", serviceName: "Afforestation Program", type: "G2C" },
    { id: 77, provider: "HEALTH DEPARTMENT", serviceName: "Birth Certificate", type: "G2C" },
    { id: 78, provider: "HEALTH DEPARTMENT", serviceName: "Death Certificate", type: "G2C" },
    { id: 79, provider: "HEALTH DEPARTMENT", serviceName: "Medical Certificate", type: "G2C" },
    { id: 80, provider: "HEALTH DEPARTMENT", serviceName: "Health Insurance Registration", type: "G2C" },
    { id: 81, provider: "HOME DEPARTMENT", serviceName: "Police Verification", type: "G2C" },
    { id: 82, provider: "HOME DEPARTMENT", serviceName: "Arms License Application", type: "G2C" },
    { id: 83, provider: "HOME DEPARTMENT", serviceName: "Character Certificate", type: "G2C" },
    { id: 84, provider: "HOME DEPARTMENT", serviceName: "Passport Verification", type: "G2C" },
    { id: 85, provider: "HOUSING DEPARTMENT", serviceName: "Housing Scheme Application", type: "G2C" },
    { id: 86, provider: "HOUSING DEPARTMENT", serviceName: "Building Permission", type: "G2C" },
    { id: 87, provider: "HOUSING DEPARTMENT", serviceName: "Property Registration", type: "G2C" },
    { id: 88, provider: "HOUSING DEPARTMENT", serviceName: "Urban Development Services", type: "G2C" },
    { id: 89, provider: "ICICI BANK", serviceName: "ICICI Bank Account Opening", type: "B2C" },
    { id: 90, provider: "ICICI BANK", serviceName: "ICICI Bank Loan Services", type: "B2C" },
    { id: 91, provider: "IDEA CELLULAR", serviceName: "Idea Mobile Recharge", type: "B2C" },
    { id: 92, provider: "IDEA CELLULAR", serviceName: "Idea Postpaid Bill Payment", type: "B2C" },
    { id: 93, provider: "INDIAN BANK", serviceName: "Indian Bank Services", type: "B2C" },
    { id: 94, provider: "INDIAN BANK", serviceName: "Indian Bank Money Transfer", type: "B2C" },
    { id: 95, provider: "INDUSTRIES DEPARTMENT", serviceName: "Industrial License", type: "G2B" },
    { id: 96, provider: "INDUSTRIES DEPARTMENT", serviceName: "MSME Registration", type: "G2B" },
    { id: 97, provider: "INDUSTRIES DEPARTMENT", serviceName: "Investment Promotion", type: "G2B" },
    { id: 98, provider: "INDUSTRIES DEPARTMENT", serviceName: "Industrial Subsidy", type: "G2B" },
    { id: 99, provider: "INFORMATION & PUBLIC RELATIONS", serviceName: "Media Accreditation", type: "G2C" },
    { id: 100, provider: "INFORMATION & PUBLIC RELATIONS", serviceName: "Government Advertisement", type: "G2B" },
    { id: 101, provider: "IRRIGATION DEPARTMENT", serviceName: "Water Connection", type: "G2C" },
    { id: 102, provider: "IRRIGATION DEPARTMENT", serviceName: "Canal Water Allocation", type: "G2C" },
    { id: 103, provider: "IRRIGATION DEPARTMENT", serviceName: "Groundwater Permission", type: "G2C" },
    { id: 104, provider: "IRRIGATION DEPARTMENT", serviceName: "Dam Safety Services", type: "G2C" },
    { id: 105, provider: "JIO", serviceName: "Jio Mobile Recharge", type: "B2C" },
    { id: 106, provider: "JIO", serviceName: "Jio Fiber Broadband", type: "B2C" },
    { id: 107, provider: "JIO", serviceName: "JioTV Services", type: "B2C" },
    { id: 108, provider: "JIO", serviceName: "Jio Postpaid Bill", type: "B2C" },
    { id: 109, provider: "LABOUR DEPARTMENT", serviceName: "Labour License", type: "G2B" },
    { id: 110, provider: "LABOUR DEPARTMENT", serviceName: "Minimum Wages Compliance", type: "G2B" },
    { id: 111, provider: "LABOUR DEPARTMENT", serviceName: "Worker Registration", type: "G2C" },
    { id: 112, provider: "LABOUR DEPARTMENT", serviceName: "Labour Welfare Schemes", type: "G2C" },
    { id: 113, provider: "LAND RECORDS", serviceName: "Land Record Copy", type: "G2C" },
    { id: 114, provider: "LAND RECORDS", serviceName: "Mutation Application", type: "G2C" },
    { id: 115, provider: "LAND RECORDS", serviceName: "Land Conversion", type: "G2C" },
    { id: 116, provider: "LAND RECORDS", serviceName: "Revenue Court Cases", type: "G2C" },
    { id: 117, provider: "LOCAL SELF GOVERNMENT", serviceName: "Birth Certificate", type: "G2C" },
    { id: 118, provider: "LOCAL SELF GOVERNMENT", serviceName: "Death Certificate", type: "G2C" },
    { id: 119, provider: "LOCAL SELF GOVERNMENT", serviceName: "Marriage Registration", type: "G2C" },
    { id: 120, provider: "LOCAL SELF GOVERNMENT", serviceName: "Property Tax Payment", type: "G2C" },
    { id: 121, provider: "MEDICAL & HEALTH", serviceName: "Medical College Admission", type: "G2C" },
    { id: 122, provider: "MEDICAL & HEALTH", serviceName: "Doctor Registration", type: "G2C" },
    { id: 123, provider: "MEDICAL & HEALTH", serviceName: "Hospital License", type: "G2B" },
    { id: 124, provider: "MEDICAL & HEALTH", serviceName: "Drug License", type: "G2B" },
    { id: 125, provider: "MINES DEPARTMENT", serviceName: "Mining License", type: "G2B" },
    { id: 126, provider: "MINES DEPARTMENT", serviceName: "Stone Quarry Permission", type: "G2B" },
    { id: 127, provider: "MINES DEPARTMENT", serviceName: "Sand Mining License", type: "G2B" },
    { id: 128, provider: "MINES DEPARTMENT", serviceName: "Mineral Exploration", type: "G2B" },
    { id: 129, provider: "MOTOR TRANSPORT", serviceName: "Driving License", type: "G2C" },
    { id: 130, provider: "MOTOR TRANSPORT", serviceName: "Vehicle Registration", type: "G2C" },
    { id: 131, provider: "MOTOR TRANSPORT", serviceName: "Permit Application", type: "G2C" },
    { id: 132, provider: "MOTOR TRANSPORT", serviceName: "Fitness Certificate", type: "G2C" },
    { id: 133, provider: "PAYTM", serviceName: "Paytm Mobile Recharge", type: "B2C" },
    { id: 134, provider: "PAYTM", serviceName: "Paytm Bill Payment", type: "B2C" },
    { id: 135, provider: "PAYTM", serviceName: "Paytm Money Transfer", type: "B2C" },
    { id: 136, provider: "PAYTM", serviceName: "Paytm Wallet Services", type: "B2C" },
    { id: 137, provider: "PERSONNEL DEPARTMENT", serviceName: "Government Job Application", type: "G2C" },
    { id: 138, provider: "PERSONNEL DEPARTMENT", serviceName: "Service Book Verification", type: "G2C" },
    { id: 139, provider: "PERSONNEL DEPARTMENT", serviceName: "Transfer Application", type: "G2C" },
    { id: 140, provider: "PERSONNEL DEPARTMENT", serviceName: "Promotion Services", type: "G2C" },
    { id: 141, provider: "POLICE DEPARTMENT", serviceName: "FIR Registration", type: "G2C" },
    { id: 142, provider: "POLICE DEPARTMENT", serviceName: "Police Clearance Certificate", type: "G2C" },
    { id: 143, provider: "POLICE DEPARTMENT", serviceName: "Lost Report", type: "G2C" },
    { id: 144, provider: "POLICE DEPARTMENT", serviceName: "NOC for Events", type: "G2C" },
    { id: 145, provider: "PUBLIC WORKS DEPARTMENT", serviceName: "Road Construction NOC", type: "G2C" },
    { id: 146, provider: "PUBLIC WORKS DEPARTMENT", serviceName: "Building Plan Approval", type: "G2C" },
    { id: 147, provider: "PUBLIC WORKS DEPARTMENT", serviceName: "Contractor License", type: "G2B" },
    { id: 148, provider: "PUBLIC WORKS DEPARTMENT", serviceName: "Tender Services", type: "G2B" },
    { id: 149, provider: "RAJASTHAN STATE ELECTRICITY BOARD", serviceName: "Electricity Connection", type: "G2C" },
    { id: 150, provider: "RAJASTHAN STATE ELECTRICITY BOARD", serviceName: "Bill Payment", type: "G2C" }
  ];

  const getServiceIcon = (serviceName: string, provider: string) => {
    const name = serviceName.toLowerCase();
    const prov = provider.toLowerCase();
    
    if (name.includes('recharge') || name.includes('mobile') || name.includes('dth')) return <Smartphone className="w-5 h-5" />;
    if (name.includes('bank') || name.includes('loan') || name.includes('money') || name.includes('payment')) return <CreditCard className="w-5 h-5" />;
    if (name.includes('certificate') || name.includes('license') || name.includes('registration')) return <FileText className="w-5 h-5" />;
    if (name.includes('electricity') || name.includes('power')) return <Zap className="w-5 h-5" />;
    if (name.includes('agriculture') || name.includes('farm') || name.includes('crop')) return <Leaf className="w-5 h-5" />;
    if (name.includes('insurance')) return <Shield className="w-5 h-5" />;
    if (name.includes('transport') || name.includes('vehicle') || name.includes('driving')) return <Car className="w-5 h-5" />;
    if (name.includes('health') || name.includes('medical')) return <Heart className="w-5 h-5" />;
    if (name.includes('education') || name.includes('school') || name.includes('scholarship')) return <GraduationCap className="w-5 h-5" />;
    if (name.includes('police') || name.includes('security')) return <Shield className="w-5 h-5" />;
    if (name.includes('employment') || name.includes('job')) return <Briefcase className="w-5 h-5" />;
    if (name.includes('housing') || name.includes('building') || name.includes('property')) return <Home className="w-5 h-5" />;
    if (prov.includes('airtel') || prov.includes('jio') || prov.includes('bsnl') || prov.includes('idea')) return <Phone className="w-5 h-5" />;
    if (prov.includes('bank')) return <Landmark className="w-5 h-5" />;
    if (name.includes('water') || name.includes('irrigation')) return <Droplets className="w-5 h-5" />;
    if (name.includes('forest') || name.includes('tree')) return <TreePine className="w-5 h-5" />;
    if (name.includes('mining') || name.includes('quarry')) return <Mountain className="w-5 h-5" />;
    if (name.includes('industry') || name.includes('manufacturing')) return <Factory className="w-5 h-5" />;
    
    return <FileText className="w-5 h-5" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'G2C': return 'bg-blue-100 text-blue-800';
      case 'B2C': return 'bg-green-100 text-green-800';
      case 'G2B': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeFullForm = (type: string) => {
    switch (type) {
      case 'G2C': return 'Government to Citizen';
      case 'B2C': return 'Business to Citizen';
      case 'G2B': return 'Government to Business';
      default: return type;
    }
  };

  const totalPages = Math.ceil(allServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = allServices.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => goToPage(currentPage - 1)}
          className="px-3 py-2 mx-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>
      );
    }

    // First page
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => goToPage(1)}
          className="px-3 py-2 mx-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis1" className="px-3 py-2 mx-1 text-gray-500">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-2 mx-1 rounded-lg ${
            currentPage === i
              ? 'bg-orange-600 text-white'
              : 'bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-3 py-2 mx-1 text-gray-500">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className="px-3 py-2 mx-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => goToPage(currentPage + 1)}
          className="px-3 py-2 mx-1 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-1"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📋 सभी उपलब्ध सेवाएं
          </h1>
          <p className="text-lg text-gray-600 mb-2">Complete Services List</p>
          <div className="bg-white rounded-lg p-4 shadow-sm inline-block">
            <p className="text-sm text-gray-700">
              कुल सेवाएं: <span className="font-bold text-orange-600">{allServices.length}</span> | 
              पृष्ठ: <span className="font-bold text-orange-600">{currentPage}</span> of <span className="font-bold text-orange-600">{totalPages}</span>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {currentServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {getServiceIcon(service.serviceName, service.provider)}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.serviceName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Provider:</span> {service.provider}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <span className="text-sm font-bold text-gray-500">
                        #{service.id}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(service.type)}`}
                        title={getTypeFullForm(service.type)}
                      >
                        {service.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-xs text-gray-500">
                      {getTypeFullForm(service.type)}
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1">
                      <span>विवरण देखें</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center items-center">
            {renderPaginationButtons()}
          </div>
          
          <div className="text-sm text-gray-600 text-center">
            Showing {startIndex + 1} to {Math.min(endIndex, allServices.length)} of {allServices.length} services
          </div>
        </div>

        {/* Service Types Legend */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📖 सेवा प्रकार की जानकारी (Service Types Information)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                G2C
              </span>
              <div>
                <p className="font-medium text-gray-900">Government to Citizen</p>
                <p className="text-sm text-gray-600">सरकार से नागरिक सेवाएं</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                B2C
              </span>
              <div>
                <p className="font-medium text-gray-900">Business to Citizen</p>
                <p className="text-sm text-gray-600">व्यापारिक सेवाएं</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                G2B
              </span>
              <div>
                <p className="font-medium text-gray-900">Government to Business</p>
                <p className="text-sm text-gray-600">सरकार से व्यापार सेवाएं</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;