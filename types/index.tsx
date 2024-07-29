export interface NavItem {
  text: string,
  onClick?: (e:any) => void
}

export interface SkillItem {
  text: string,
  iconSrc: string,
  iconAlt: string,
  iconHeight?: number,
  iconWidth?: number
}

export interface ParticleOptions {
  number: number;
  speed: number;
}

export interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}