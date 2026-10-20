import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  Gamepad2,
  MessageCircle,
  Music,
  Play,
  Users,
} from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "trailers", path: "/trailers", icon: Play, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "production", path: "/production", icon: Building2, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Gamepad2, isContentType: true },
  { key: "community", path: "/community", icon: MessageCircle, isContentType: true },
  { key: "music", path: "/music", icon: Music, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
