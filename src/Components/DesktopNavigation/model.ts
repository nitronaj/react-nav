export interface ILogo {
  id?: string;
  url: string;
  altText: string;
  src?: string;
  children?: React.ReactChildren;
}

export interface IButtonLink {
  id?: string;
  url: string;
  label: string;
}

export interface IExternalLink {
  id: string;
  label: string;
  link: string;
}

export interface IMenuitem {
  label: string;
  description?: string;
  url: string;
}

export interface INavItem {
  label: string;
  link?: string;
  menuItems?: IMenuitem[];
}

export interface IAemTopHeader {
  logo: string;
  logoLink: string;
  logoId: string;
  logoAltText: string;
  btn1Label: string;
  btn1Link: string;
  btn1Id: string;
  btn2Label: string;
  btn2Link: string;
  btn2Id: string;
  externalLink?: IExternalLink;
  resourceType?: string;
}

export interface ITopHeader {
  logo: ILogo;
  joinBtn?: IButtonLink;
  loginBtn?: IButtonLink;
  isMobile: boolean;
}

export interface IHeader {
  header: IAemTopHeader;
  navItems: INavItem[];
  resourceType: string;
}