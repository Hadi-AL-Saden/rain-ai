"use client"

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button';
import {Sheet, SheetClose, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar';
import { useEffect, useState } from 'react';


export default function MobileSidebar() {

  const [IsMounted,SetIsMounted] =useState(false);
  useEffect(()=>{
    SetIsMounted(true);
  }, []);

  if(!IsMounted){
    return null;
  }




  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="md:hidden" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0  text-white opacity-90">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
