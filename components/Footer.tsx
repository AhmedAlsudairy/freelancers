import { footerLinks } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {


    type ColumnProps = {
        title: string;
        links: string[];
    };
    
    const FooterColumn = ({ title, links }: ColumnProps) => (
        <div className="footer_column">
            <h4 className="font-semibold">{title}</h4>
            <ul className="flex flex-col gap-2 font-normal">
                {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
            </ul>
        </div>
    );




  return (
    <footer className="flexStart footer" >
      <div className="flex flex-col gap-12 w-full">

 <div className="flex items-start flex-col">
<Image src="/logo-purple.svg" width={115} height={38} alt="flexibble"/>
 
<p className="text-start text-sm font-normal mt-5 m-w-xs">
 Flexibble is the world&apos;s leading community for creatives to share, grow, and get hired.</p>
 </div>
 <div className="flex flex-wrap gap-12">
  {footerLinks.map((link, index) => (
    <div key={index} className="flex-1 flex flex-col gap-4">
      <FooterColumn title={link.title} links={link.links} />
    </div>
  ))}
</div>


 
      </div>

      <div className="flexBetween footer_copyright">
            <p>@ 2023 Flexibble. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">10,214</span> projects submitted
            </p>
        </div>

    </footer >
  )
}

export default Footer
