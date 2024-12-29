"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../components/image/Frame 5.png';
import image1 from '../components/image/image1.png';
import image14 from '../components/image/image14.png';

const Footer = () => {
    const [toggle, setToggle] = useState(false);
        const menuRef = useRef(null); 
        const menuButtonRef = useRef(null);
    
        const handleClickOutside = (event) => {
            // Close menu if clicked outside of menu and toggle button
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
            ) {
                setToggle(false);
            }
        };
    
        useEffect(() => {
            // Add event listener for clicks outside the component
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
    return (
        <div>
            <div className='relative z-30 w-full '>
                <div className='container mx-auto relative'>
                    <div className='relative'>
                    <div className='2xl:mb-[-217px]'>
                    <div className='marketfooter flex justify-between items-center sm:flex-row flex-col pt-[20px] sm:pt-0'>
                        <div className='flex-1'>
                            <h2 className='moreconveniet'><p className="moreconvenietpara">Invest with the</p> 
                            faster and more <br/> convenient </h2>
                            <div className='playlisticon flex justify-start items-center gap-[8px] sm:gap-[12px] lg:gap-[16px] mt-[20px] sm:mt-[25px] lg:mt-[32px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
  <rect width="120" height="40" rx="7" fill="#0C0D10"/>
  <path d="M81.5257 19.2009V21.4919H80.0896V22.9944H81.5257V28.0994C81.5257 29.8425 82.3143 30.5398 84.2981 30.5398C84.6468 30.5398 84.9788 30.4983 85.2693 30.4485V28.9626C85.0203 28.9875 84.8626 29.0041 84.5887 29.0041C83.7005 29.0041 83.3104 28.5891 83.3104 27.6428V22.9944H85.2693V21.4919H83.3104V19.2009H81.5257Z" fill="white"/>
  <path d="M90.3232 30.6643C92.9628 30.6643 94.5815 28.8962 94.5815 25.9661C94.5815 23.0525 92.9545 21.2761 90.3232 21.2761C87.6835 21.2761 86.0566 23.0525 86.0566 25.9661C86.0566 28.8962 87.6752 30.6643 90.3232 30.6643ZM90.3232 29.0789C88.7709 29.0789 87.8994 27.9416 87.8994 25.9661C87.8994 24.0071 88.7709 22.8616 90.3232 22.8616C91.8671 22.8616 92.747 24.0071 92.747 25.9661C92.747 27.9333 91.8671 29.0789 90.3232 29.0789Z" fill="white"/>
  <path d="M95.9664 30.49H97.7511V25.1526C97.7511 23.8826 98.7056 23.0276 100.059 23.0276C100.374 23.0276 100.905 23.0857 101.055 23.1355V21.3757C100.864 21.3259 100.524 21.301 100.258 21.301C99.0792 21.301 98.0748 21.9485 97.8175 22.8367H97.6846V21.4504H95.9664V30.49Z" fill="white"/>
  <path d="M105.486 22.7952C106.806 22.7952 107.669 23.7165 107.711 25.136H103.145C103.245 23.7248 104.166 22.7952 105.486 22.7952ZM107.702 28.0496C107.37 28.7551 106.632 29.1453 105.552 29.1453C104.125 29.1453 103.203 28.1409 103.145 26.5554V26.4558H109.529V25.8332C109.529 22.9944 108.009 21.2761 105.494 21.2761C102.946 21.2761 101.327 23.1106 101.327 25.9993C101.327 28.8879 102.913 30.6643 105.503 30.6643C107.57 30.6643 109.014 29.6682 109.421 28.0496H107.702Z" fill="white"/>
  <path d="M69.8221 27.1518C69.9598 29.3715 71.8095 30.7911 74.5626 30.7911C77.505 30.7911 79.3462 29.3027 79.3462 26.9281C79.3462 25.0612 78.2966 24.0287 75.7499 23.4351L74.382 23.0996C72.7645 22.721 72.1106 22.2134 72.1106 21.3272C72.1106 20.2088 73.1259 19.4775 74.6487 19.4775C76.0941 19.4775 77.0921 20.1916 77.2727 21.3358H79.1483C79.0365 19.2452 77.1953 17.774 74.6745 17.774C71.9644 17.774 70.1576 19.2452 70.1576 21.4563C70.1576 23.2802 71.1815 24.3643 73.427 24.8891L75.0272 25.2763C76.6705 25.6634 77.3932 26.2312 77.3932 27.1776C77.3932 28.2789 76.2575 29.079 74.7089 29.079C73.0484 29.079 71.8955 28.3305 71.7321 27.1518H69.8221Z" fill="white"/>
  <path d="M51.3348 21.301C50.1063 21.301 49.0437 21.9153 48.4959 22.9446H48.3631V21.4504H46.6448V33.4949H48.4295V29.1204H48.5706C49.0437 30.0749 50.0647 30.6394 51.3514 30.6394C53.6341 30.6394 55.0867 28.8381 55.0867 25.9661C55.0867 23.094 53.6341 21.301 51.3348 21.301ZM50.8284 29.0373C49.3343 29.0373 48.3963 27.8586 48.3963 25.9744C48.3963 24.0818 49.3343 22.9031 50.8367 22.9031C52.3475 22.9031 53.2522 24.0569 53.2522 25.9661C53.2522 27.8835 52.3475 29.0373 50.8284 29.0373Z" fill="white"/>
  <path d="M61.3316 21.301C60.103 21.301 59.0405 21.9153 58.4927 22.9446H58.3599V21.4504H56.6416V33.4949H58.4263V29.1204H58.5674C59.0405 30.0749 60.0615 30.6394 61.3482 30.6394C63.6309 30.6394 65.0835 28.8381 65.0835 25.9661C65.0835 23.094 63.6309 21.301 61.3316 21.301ZM60.8252 29.0373C59.3311 29.0373 58.3931 27.8586 58.3931 25.9744C58.3931 24.0818 59.3311 22.9031 60.8335 22.9031C62.3443 22.9031 63.249 24.0569 63.249 25.9661C63.249 27.8835 62.3443 29.0373 60.8252 29.0373Z" fill="white"/>
  <path d="M43.4428 30.49H45.4905L41.008 18.0751H38.9346L34.4521 30.49H36.431L37.5752 27.1948H42.3072L43.4428 30.49ZM39.8724 20.3292H40.0186L41.8168 25.5774H38.0656L39.8724 20.3292Z" fill="white"/>
  <path d="M35.6514 8.71094V14.7H37.8137C39.5984 14.7 40.6318 13.6001 40.6318 11.6868C40.6318 9.80249 39.5901 8.71094 37.8137 8.71094H35.6514ZM36.5811 9.55762H37.71C38.9509 9.55762 39.6855 10.3462 39.6855 11.6992C39.6855 13.073 38.9634 13.8533 37.71 13.8533H36.5811V9.55762Z" fill="white"/>
  <path d="M43.7969 14.7871C45.1167 14.7871 45.9261 13.9031 45.9261 12.438C45.9261 10.9812 45.1126 10.093 43.7969 10.093C42.4771 10.093 41.6636 10.9812 41.6636 12.438C41.6636 13.9031 42.4729 14.7871 43.7969 14.7871ZM43.7969 13.9944C43.0208 13.9944 42.585 13.4258 42.585 12.438C42.585 11.4585 43.0208 10.8857 43.7969 10.8857C44.5689 10.8857 45.0088 11.4585 45.0088 12.438C45.0088 13.4216 44.5689 13.9944 43.7969 13.9944Z" fill="white"/>
  <path d="M52.8182 10.1802H51.9259L51.1207 13.6292H51.0501L50.1205 10.1802H49.2655L48.3358 13.6292H48.2694L47.4601 10.1802H46.5553L47.8004 14.7H48.7176L49.6473 11.3713H49.7179L50.6517 14.7H51.5772L52.8182 10.1802Z" fill="white"/>
  <path d="M53.8458 14.7H54.7382V12.0562C54.7382 11.3506 55.1574 10.9106 55.8173 10.9106C56.4772 10.9106 56.7926 11.2717 56.7926 11.998V14.7H57.685V11.7739C57.685 10.699 57.1288 10.093 56.1203 10.093C55.4396 10.093 54.9914 10.396 54.7714 10.8982H54.705V10.1802H53.8458V14.7Z" fill="white"/>
  <path d="M59.0903 14.7H59.9826V8.41626H59.0903V14.7Z" fill="white"/>
  <path d="M63.3386 14.7871C64.6584 14.7871 65.4678 13.9031 65.4678 12.438C65.4678 10.9812 64.6543 10.093 63.3386 10.093C62.0188 10.093 61.2053 10.9812 61.2053 12.438C61.2053 13.9031 62.0146 14.7871 63.3386 14.7871ZM63.3386 13.9944C62.5625 13.9944 62.1267 13.4258 62.1267 12.438C62.1267 11.4585 62.5625 10.8857 63.3386 10.8857C64.1106 10.8857 64.5505 11.4585 64.5505 12.438C64.5505 13.4216 64.1106 13.9944 63.3386 13.9944Z" fill="white"/>
  <path d="M68.1265 14.0234C67.6409 14.0234 67.2881 13.7869 67.2881 13.3801C67.2881 12.9817 67.5704 12.77 68.1929 12.7285L69.2969 12.658V13.0356C69.2969 13.5959 68.7989 14.0234 68.1265 14.0234ZM67.8982 14.7747C68.4917 14.7747 68.9856 14.5173 69.2554 14.0649H69.326V14.7H70.1851V11.6121C70.1851 10.6575 69.5459 10.093 68.4129 10.093C67.3877 10.093 66.6573 10.5911 66.566 11.3672H67.4292C67.5289 11.0476 67.8733 10.865 68.3714 10.865C68.9815 10.865 69.2969 11.1348 69.2969 11.6121V12.0022L68.0726 12.0728C66.9976 12.1392 66.3916 12.6082 66.3916 13.4216C66.3916 14.2476 67.0267 14.7747 67.8982 14.7747Z" fill="white"/>
  <path d="M73.2132 14.7747C73.8358 14.7747 74.3629 14.48 74.6327 13.9861H74.7032V14.7H75.5582V8.41626H74.6659V10.8982H74.5995C74.3546 10.4001 73.8316 10.1055 73.2132 10.1055C72.0719 10.1055 71.3373 11.0103 71.3373 12.438C71.3373 13.8699 72.0636 14.7747 73.2132 14.7747ZM73.4664 10.9065C74.2135 10.9065 74.6825 11.5 74.6825 12.4421C74.6825 13.3884 74.2176 13.9736 73.4664 13.9736C72.711 13.9736 72.2586 13.3967 72.2586 12.438C72.2586 11.4875 72.7152 10.9065 73.4664 10.9065Z" fill="white"/>
  <path d="M81.3447 14.7871C82.6645 14.7871 83.4738 13.9031 83.4738 12.438C83.4738 10.9812 82.6604 10.093 81.3447 10.093C80.0249 10.093 79.2114 10.9812 79.2114 12.438C79.2114 13.9031 80.0207 14.7871 81.3447 14.7871ZM81.3447 13.9944C80.5686 13.9944 80.1328 13.4258 80.1328 12.438C80.1328 11.4585 80.5686 10.8857 81.3447 10.8857C82.1166 10.8857 82.5566 11.4585 82.5566 12.438C82.5566 13.4216 82.1166 13.9944 81.3447 13.9944Z" fill="white"/>
  <path d="M84.655 14.7H85.5474V12.0562C85.5474 11.3506 85.9666 10.9106 86.6265 10.9106C87.2864 10.9106 87.6018 11.2717 87.6018 11.998V14.7H88.4941V11.7739C88.4941 10.699 87.938 10.093 86.9294 10.093C86.2488 10.093 85.8005 10.396 85.5806 10.8982H85.5142V10.1802H84.655V14.7Z" fill="white"/>
  <path d="M92.6039 9.05542V10.2009H91.8858V10.9521H92.6039V13.5046C92.6039 14.3762 92.9981 14.7249 93.9901 14.7249C94.1644 14.7249 94.3304 14.7041 94.4757 14.6792V13.9363C94.3512 13.9487 94.2723 13.957 94.1353 13.957C93.6913 13.957 93.4962 13.7495 93.4962 13.2764V10.9521H94.4757V10.2009H93.4962V9.05542H92.6039Z" fill="white"/>
  <path d="M95.6735 14.7H96.5658V12.0603C96.5658 11.3755 96.9726 10.9148 97.703 10.9148C98.3339 10.9148 98.6701 11.28 98.6701 12.0022V14.7H99.5624V11.7822C99.5624 10.7073 98.9689 10.0972 98.006 10.0972C97.3253 10.0972 96.848 10.4001 96.6281 10.9065H96.5575V8.41626H95.6735V14.7Z" fill="white"/>
  <path d="M102.781 10.8525C103.441 10.8525 103.873 11.3132 103.894 12.0229H101.611C101.661 11.3174 102.122 10.8525 102.781 10.8525ZM103.89 13.4797C103.724 13.8325 103.354 14.0276 102.815 14.0276C102.101 14.0276 101.64 13.5254 101.611 12.7327V12.6829H104.803V12.3716C104.803 10.9521 104.043 10.093 102.786 10.093C101.511 10.093 100.702 11.0103 100.702 12.4546C100.702 13.8989 101.495 14.7871 102.79 14.7871C103.823 14.7871 104.545 14.2891 104.749 13.4797H103.89Z" fill="white"/>
  <path d="M24.769 20.3008C24.7907 18.6198 25.6934 17.0292 27.1256 16.1488C26.2221 14.8584 24.7088 14.0403 23.1344 13.9911C21.4552 13.8148 19.8272 14.9959 18.9715 14.9959C18.0992 14.9959 16.7817 14.0086 15.363 14.0378C13.5137 14.0975 11.7898 15.1489 10.8901 16.7656C8.95607 20.1141 10.3987 25.0351 12.2513 27.7417C13.1782 29.0671 14.2615 30.5475 15.6789 30.495C17.066 30.4375 17.584 29.6105 19.2583 29.6105C20.9171 29.6105 21.4031 30.495 22.8493 30.4616C24.3377 30.4375 25.2754 29.1304 26.1698 27.7925C26.8358 26.8481 27.3483 25.8044 27.6882 24.7C25.9391 23.9602 24.771 22.2 24.769 20.3008Z" fill="white"/>
  <path d="M22.0373 12.2111C22.8489 11.2369 23.2487 9.98469 23.1518 8.72046C21.912 8.85068 20.7668 9.44324 19.9443 10.3801C19.14 11.2954 18.7214 12.5255 18.8006 13.7415C20.0408 13.7542 21.2601 13.1777 22.0373 12.2111Z" fill="white"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
  <rect width="120" height="40" rx="7" fill="#0C0D10"/>
  <path d="M81.5257 19.2009V21.4919H80.0896V22.9944H81.5257V28.0994C81.5257 29.8425 82.3143 30.5398 84.2981 30.5398C84.6468 30.5398 84.9788 30.4983 85.2693 30.4485V28.9626C85.0203 28.9875 84.8626 29.0041 84.5887 29.0041C83.7005 29.0041 83.3104 28.5891 83.3104 27.6428V22.9944H85.2693V21.4919H83.3104V19.2009H81.5257Z" fill="white"/>
  <path d="M90.3232 30.6643C92.9628 30.6643 94.5815 28.8962 94.5815 25.9661C94.5815 23.0525 92.9545 21.2761 90.3232 21.2761C87.6835 21.2761 86.0566 23.0525 86.0566 25.9661C86.0566 28.8962 87.6752 30.6643 90.3232 30.6643ZM90.3232 29.0789C88.7709 29.0789 87.8994 27.9416 87.8994 25.9661C87.8994 24.0071 88.7709 22.8616 90.3232 22.8616C91.8671 22.8616 92.747 24.0071 92.747 25.9661C92.747 27.9333 91.8671 29.0789 90.3232 29.0789Z" fill="white"/>
  <path d="M95.9664 30.49H97.7511V25.1526C97.7511 23.8826 98.7056 23.0276 100.059 23.0276C100.374 23.0276 100.905 23.0857 101.055 23.1355V21.3757C100.864 21.3259 100.524 21.301 100.258 21.301C99.0792 21.301 98.0748 21.9485 97.8175 22.8367H97.6846V21.4504H95.9664V30.49Z" fill="white"/>
  <path d="M105.486 22.7952C106.806 22.7952 107.669 23.7165 107.711 25.136H103.145C103.245 23.7248 104.166 22.7952 105.486 22.7952ZM107.702 28.0496C107.37 28.7551 106.632 29.1453 105.552 29.1453C104.125 29.1453 103.203 28.1409 103.145 26.5554V26.4558H109.529V25.8332C109.529 22.9944 108.009 21.2761 105.494 21.2761C102.946 21.2761 101.327 23.1106 101.327 25.9993C101.327 28.8879 102.913 30.6643 105.503 30.6643C107.57 30.6643 109.014 29.6682 109.421 28.0496H107.702Z" fill="white"/>
  <path d="M69.8221 27.1518C69.9598 29.3715 71.8095 30.7911 74.5626 30.7911C77.505 30.7911 79.3462 29.3027 79.3462 26.9281C79.3462 25.0612 78.2966 24.0287 75.7499 23.4351L74.382 23.0996C72.7645 22.721 72.1106 22.2134 72.1106 21.3272C72.1106 20.2088 73.1259 19.4775 74.6487 19.4775C76.0941 19.4775 77.0921 20.1916 77.2727 21.3358H79.1483C79.0365 19.2452 77.1953 17.774 74.6745 17.774C71.9644 17.774 70.1576 19.2452 70.1576 21.4563C70.1576 23.2802 71.1815 24.3643 73.427 24.8891L75.0272 25.2763C76.6705 25.6634 77.3932 26.2312 77.3932 27.1776C77.3932 28.2789 76.2575 29.079 74.7089 29.079C73.0484 29.079 71.8955 28.3305 71.7321 27.1518H69.8221Z" fill="white"/>
  <path d="M51.3348 21.301C50.1063 21.301 49.0437 21.9153 48.4959 22.9446H48.3631V21.4504H46.6448V33.4949H48.4295V29.1204H48.5706C49.0437 30.0749 50.0647 30.6394 51.3514 30.6394C53.6341 30.6394 55.0867 28.8381 55.0867 25.9661C55.0867 23.094 53.6341 21.301 51.3348 21.301ZM50.8284 29.0373C49.3343 29.0373 48.3963 27.8586 48.3963 25.9744C48.3963 24.0818 49.3343 22.9031 50.8367 22.9031C52.3475 22.9031 53.2522 24.0569 53.2522 25.9661C53.2522 27.8835 52.3475 29.0373 50.8284 29.0373Z" fill="white"/>
  <path d="M61.3316 21.301C60.103 21.301 59.0405 21.9153 58.4927 22.9446H58.3599V21.4504H56.6416V33.4949H58.4263V29.1204H58.5674C59.0405 30.0749 60.0615 30.6394 61.3482 30.6394C63.6309 30.6394 65.0835 28.8381 65.0835 25.9661C65.0835 23.094 63.6309 21.301 61.3316 21.301ZM60.8252 29.0373C59.3311 29.0373 58.3931 27.8586 58.3931 25.9744C58.3931 24.0818 59.3311 22.9031 60.8335 22.9031C62.3443 22.9031 63.249 24.0569 63.249 25.9661C63.249 27.8835 62.3443 29.0373 60.8252 29.0373Z" fill="white"/>
  <path d="M43.4428 30.49H45.4905L41.008 18.0751H38.9346L34.4521 30.49H36.431L37.5752 27.1948H42.3072L43.4428 30.49ZM39.8724 20.3292H40.0186L41.8168 25.5774H38.0656L39.8724 20.3292Z" fill="white"/>
  <path d="M35.6514 8.71094V14.7H37.8137C39.5984 14.7 40.6318 13.6001 40.6318 11.6868C40.6318 9.80249 39.5901 8.71094 37.8137 8.71094H35.6514ZM36.5811 9.55762H37.71C38.9509 9.55762 39.6855 10.3462 39.6855 11.6992C39.6855 13.073 38.9634 13.8533 37.71 13.8533H36.5811V9.55762Z" fill="white"/>
  <path d="M43.7969 14.7871C45.1167 14.7871 45.9261 13.9031 45.9261 12.438C45.9261 10.9812 45.1126 10.093 43.7969 10.093C42.4771 10.093 41.6636 10.9812 41.6636 12.438C41.6636 13.9031 42.4729 14.7871 43.7969 14.7871ZM43.7969 13.9944C43.0208 13.9944 42.585 13.4258 42.585 12.438C42.585 11.4585 43.0208 10.8857 43.7969 10.8857C44.5689 10.8857 45.0088 11.4585 45.0088 12.438C45.0088 13.4216 44.5689 13.9944 43.7969 13.9944Z" fill="white"/>
  <path d="M52.8182 10.1802H51.9259L51.1207 13.6292H51.0501L50.1205 10.1802H49.2655L48.3358 13.6292H48.2694L47.4601 10.1802H46.5553L47.8004 14.7H48.7176L49.6473 11.3713H49.7179L50.6517 14.7H51.5772L52.8182 10.1802Z" fill="white"/>
  <path d="M53.8458 14.7H54.7382V12.0562C54.7382 11.3506 55.1574 10.9106 55.8173 10.9106C56.4772 10.9106 56.7926 11.2717 56.7926 11.998V14.7H57.685V11.7739C57.685 10.699 57.1288 10.093 56.1203 10.093C55.4396 10.093 54.9914 10.396 54.7714 10.8982H54.705V10.1802H53.8458V14.7Z" fill="white"/>
  <path d="M59.0903 14.7H59.9826V8.41626H59.0903V14.7Z" fill="white"/>
  <path d="M63.3386 14.7871C64.6584 14.7871 65.4678 13.9031 65.4678 12.438C65.4678 10.9812 64.6543 10.093 63.3386 10.093C62.0188 10.093 61.2053 10.9812 61.2053 12.438C61.2053 13.9031 62.0146 14.7871 63.3386 14.7871ZM63.3386 13.9944C62.5625 13.9944 62.1267 13.4258 62.1267 12.438C62.1267 11.4585 62.5625 10.8857 63.3386 10.8857C64.1106 10.8857 64.5505 11.4585 64.5505 12.438C64.5505 13.4216 64.1106 13.9944 63.3386 13.9944Z" fill="white"/>
  <path d="M68.1265 14.0234C67.6409 14.0234 67.2881 13.7869 67.2881 13.3801C67.2881 12.9817 67.5704 12.77 68.1929 12.7285L69.2969 12.658V13.0356C69.2969 13.5959 68.7989 14.0234 68.1265 14.0234ZM67.8982 14.7747C68.4917 14.7747 68.9856 14.5173 69.2554 14.0649H69.326V14.7H70.1851V11.6121C70.1851 10.6575 69.5459 10.093 68.4129 10.093C67.3877 10.093 66.6573 10.5911 66.566 11.3672H67.4292C67.5289 11.0476 67.8733 10.865 68.3714 10.865C68.9815 10.865 69.2969 11.1348 69.2969 11.6121V12.0022L68.0726 12.0728C66.9976 12.1392 66.3916 12.6082 66.3916 13.4216C66.3916 14.2476 67.0267 14.7747 67.8982 14.7747Z" fill="white"/>
  <path d="M73.2132 14.7747C73.8358 14.7747 74.3629 14.48 74.6327 13.9861H74.7032V14.7H75.5582V8.41626H74.6659V10.8982H74.5995C74.3546 10.4001 73.8316 10.1055 73.2132 10.1055C72.0719 10.1055 71.3373 11.0103 71.3373 12.438C71.3373 13.8699 72.0636 14.7747 73.2132 14.7747ZM73.4664 10.9065C74.2135 10.9065 74.6825 11.5 74.6825 12.4421C74.6825 13.3884 74.2176 13.9736 73.4664 13.9736C72.711 13.9736 72.2586 13.3967 72.2586 12.438C72.2586 11.4875 72.7152 10.9065 73.4664 10.9065Z" fill="white"/>
  <path d="M81.3447 14.7871C82.6645 14.7871 83.4738 13.9031 83.4738 12.438C83.4738 10.9812 82.6604 10.093 81.3447 10.093C80.0249 10.093 79.2114 10.9812 79.2114 12.438C79.2114 13.9031 80.0207 14.7871 81.3447 14.7871ZM81.3447 13.9944C80.5686 13.9944 80.1328 13.4258 80.1328 12.438C80.1328 11.4585 80.5686 10.8857 81.3447 10.8857C82.1166 10.8857 82.5566 11.4585 82.5566 12.438C82.5566 13.4216 82.1166 13.9944 81.3447 13.9944Z" fill="white"/>
  <path d="M84.655 14.7H85.5474V12.0562C85.5474 11.3506 85.9666 10.9106 86.6265 10.9106C87.2864 10.9106 87.6018 11.2717 87.6018 11.998V14.7H88.4941V11.7739C88.4941 10.699 87.938 10.093 86.9294 10.093C86.2488 10.093 85.8005 10.396 85.5806 10.8982H85.5142V10.1802H84.655V14.7Z" fill="white"/>
  <path d="M92.6039 9.05542V10.2009H91.8858V10.9521H92.6039V13.5046C92.6039 14.3762 92.9981 14.7249 93.9901 14.7249C94.1644 14.7249 94.3304 14.7041 94.4757 14.6792V13.9363C94.3512 13.9487 94.2723 13.957 94.1353 13.957C93.6913 13.957 93.4962 13.7495 93.4962 13.2764V10.9521H94.4757V10.2009H93.4962V9.05542H92.6039Z" fill="white"/>
  <path d="M95.6735 14.7H96.5658V12.0603C96.5658 11.3755 96.9726 10.9148 97.703 10.9148C98.3339 10.9148 98.6701 11.28 98.6701 12.0022V14.7H99.5624V11.7822C99.5624 10.7073 98.9689 10.0972 98.006 10.0972C97.3253 10.0972 96.848 10.4001 96.6281 10.9065H96.5575V8.41626H95.6735V14.7Z" fill="white"/>
  <path d="M102.781 10.8525C103.441 10.8525 103.873 11.3132 103.894 12.0229H101.611C101.661 11.3174 102.122 10.8525 102.781 10.8525ZM103.89 13.4797C103.724 13.8325 103.354 14.0276 102.815 14.0276C102.101 14.0276 101.64 13.5254 101.611 12.7327V12.6829H104.803V12.3716C104.803 10.9521 104.043 10.093 102.786 10.093C101.511 10.093 100.702 11.0103 100.702 12.4546C100.702 13.8989 101.495 14.7871 102.79 14.7871C103.823 14.7871 104.545 14.2891 104.749 13.4797H103.89Z" fill="white"/>
  <path d="M24.769 20.3008C24.7907 18.6198 25.6934 17.0292 27.1256 16.1488C26.2221 14.8584 24.7088 14.0403 23.1344 13.9911C21.4552 13.8148 19.8272 14.9959 18.9715 14.9959C18.0992 14.9959 16.7817 14.0086 15.363 14.0378C13.5137 14.0975 11.7898 15.1489 10.8901 16.7656C8.95607 20.1141 10.3987 25.0351 12.2513 27.7417C13.1782 29.0671 14.2615 30.5475 15.6789 30.495C17.066 30.4375 17.584 29.6105 19.2583 29.6105C20.9171 29.6105 21.4031 30.495 22.8493 30.4616C24.3377 30.4375 25.2754 29.1304 26.1698 27.7925C26.8358 26.8481 27.3483 25.8044 27.6882 24.7C25.9391 23.9602 24.771 22.2 24.769 20.3008Z" fill="white"/>
  <path d="M22.0373 12.2111C22.8489 11.2369 23.2487 9.98469 23.1518 8.72046C21.912 8.85068 20.7668 9.44324 19.9443 10.3801C19.14 11.2954 18.7214 12.5255 18.8006 13.7415C20.0408 13.7542 21.2601 13.1777 22.0373 12.2111Z" fill="white"/>
                            </svg>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <Image className='w-full' src={image14} alt=''/>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                </div>
                <div className='bg-[#151313] 2xl:pt-[217px]'>
                <div className=' container mx-auto flex sm:flex-row flex-col gap-[30px] sm:gap-[25px] lg:gap-[30px] 2xl:gap-[35px] justify-between items-center sm:items-start pb-[33px] sm:pb-[44px] md:pb-[64px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[124px] pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[60px] xl:pt-[70px] 2xl:pt-[84px]'>
                        <div className='flex flex-col items-center sm:items-start'>
                            <h3 className='consoitionas'>Phone consultation</h3>
                            <p className='numvering'>1661-5566  <span className='timingsystime'>(9:00 AM to 6:00 PM)</span></p>
                        </div>
                        <div className='flex flex-col items-center sm:items-start'>
                            <h3 className='consoitionas'>Emergency accident submission</h3>
                            <p className='numvering'>1661-5542  <span className='timingsystime'>(24/7/365)</span></p>
                        </div>
                        <div className='flex flex-col items-center sm:items-start'>
                            <h3 className='consoitionas'>Chat consultation</h3>
                            <p className='numvering'>Chatbot consultation   <span className='timingsystime'>(24/7/365)</span></p>
                        </div>
                        <div className='flex flex-col items-center sm:items-start'>
                            <h3 className='consoitionas'>Investor Protection Center</h3>
                            <p className='numvering'>How to Get Here</p>
                        </div>
                    </div>
            <header className='border-t-[1px] border-[#ffffff1a] container mx-auto flex justify-between items-center relative px-[24px] sm:px-[0] py-[20px] md:py-[28px] xl:py-[32px]'>
                
                <div className='lg:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo w-[120px] lg:w-[180px] 2xl:w-[207px]'><Image src={logo} alt=''/></h1>
                <div clssName="navbar-items-mainbackground">
                <nav
                    ref={menuRef}
                    className={`navbar-items-main absolute lg:top-0 top-[100%] lg:flex lg:right-0 lg:relative 
                                duration-1000 z-50 lg:opacity-100 flex justify-between items-start lg:items-center 
                                gap-[22px] lmd:gap-[28px] lg:gap-[32px] xl:gap-[40px] 2xl:gap-[48px] 
                                lg:flex-row flex-col p-[20px] lg:p-[4px] overflow-hidden
                                transition-all ease-in-out !bg-transparent
                                ${toggle ? 'right-[10px] opacity-100' : 'right-[130%] opacity-10'}
                                ${toggle ? 'block' : 'hidden'}
                                `}
                    >


                    <Link className=' group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center' href="Bots">About Us
                    </Link>
                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Markets">Notices
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Trade">White paper
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Token">Trends
                    </Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/AI Assistant">Terms and Conditions
                    </Link>
                </nav>
                </div>
                <ul className='relative'>
                    <div className='flex justify-center items-center gap-[8px] md:gap-[18px] xl:gap-[20px] 2xl:gap-[24px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path d="M24.4341 7.4839L5.16865 14.9146C3.85375 15.4422 3.86155 16.1756 4.92898 16.5026L9.73385 18.0023L11.5723 23.6389C11.7958 24.2558 11.6856 24.5005 12.3335 24.5005C12.8334 24.5005 13.0552 24.2725 13.3336 24.0005C13.5107 23.8273 14.562 22.8051 15.7359 21.6638L20.7339 25.3565C21.6536 25.8639 22.3177 25.601 22.5467 24.5023L25.8274 9.04205C26.1633 7.69538 25.3141 7.08454 24.4341 7.4839ZM10.4879 17.6578L21.3181 10.8249C21.8588 10.497 22.3545 10.6733 21.9475 11.0346L12.674 19.4016L12.3129 23.2528L10.4879 17.6578Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27539 4.6665C5.38683 4.6665 4.6665 5.38683 4.6665 6.27539V25.7242C4.6665 26.6128 5.38683 27.3331 6.27539 27.3331H25.7243C26.6128 27.3331 27.3332 26.6128 27.3332 25.7242V6.27539C27.3332 5.38683 26.6128 4.6665 25.7243 4.6665H6.27539ZM9.75413 11.7056C10.8401 11.7056 11.7205 10.8253 11.7205 9.73932C11.7205 8.65335 10.8401 7.77299 9.75413 7.77299C8.66816 7.77299 7.7878 8.65335 7.7878 9.73932C7.7878 10.8253 8.66816 11.7056 9.75413 11.7056ZM13.5213 13.1588H16.7801V14.6517C16.7801 14.6517 17.6644 12.883 20.0706 12.883C22.217 12.883 23.995 13.9404 23.995 17.1633V23.9595H20.6179V17.9868C20.6179 16.0856 19.6029 15.8765 18.8295 15.8765C17.2243 15.8765 16.9495 17.2611 16.9495 18.2348V23.9595H13.5213V13.1588ZM11.4682 13.1588H8.04003V23.9595H11.4682V13.1588Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 16C4 21.9333 8.33333 26.8667 14 27.8667L14.0669 27.8132C14.0446 27.8088 14.0223 27.8045 14 27.8V19.3333H11V16H14V13.3333C14 10.3333 15.9333 8.66667 18.6667 8.66667C19.5333 8.66667 20.4667 8.8 21.3333 8.93333V12H19.8C18.3333 12 18 12.7333 18 13.6667V16H21.2L20.6667 19.3333H18V27.8C17.9777 27.8045 17.9554 27.8088 17.9331 27.8132L18 27.8667C23.6667 26.8667 28 21.9333 28 16C28 9.4 22.6 4 16 4C9.4 4 4 9.4 4 16Z" fill="white"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] sm:w-[32px]' viewBox="0 0 32 32" fill="none">
                    <path d="M25.241 7.51108C23.5413 6.73122 21.7187 6.15664 19.813 5.82755C19.7784 5.8212 19.7437 5.83707 19.7258 5.86882C19.4914 6.28573 19.2318 6.82962 19.0499 7.25712C17.0003 6.95025 14.9611 6.95025 12.9535 7.25712C12.7717 6.8201 12.5026 6.28573 12.2671 5.86882C12.2493 5.83813 12.2146 5.82226 12.1799 5.82755C10.2753 6.15558 8.45268 6.73016 6.75199 7.51108C6.73727 7.51742 6.72466 7.52801 6.71625 7.54176C3.25916 12.7066 2.31211 17.7445 2.7767 22.7199C2.77881 22.7443 2.79247 22.7675 2.81139 22.7824C5.09229 24.4574 7.30172 25.4743 9.47015 26.1483C9.50484 26.1589 9.54163 26.1462 9.5637 26.1177C10.0766 25.4172 10.5339 24.6786 10.9259 23.9019C10.9491 23.8564 10.927 23.8024 10.8797 23.7844C10.1544 23.5093 9.46385 23.1739 8.79955 22.7929C8.74699 22.7623 8.74279 22.6871 8.79114 22.6511C8.93093 22.5464 9.07073 22.4374 9.20422 22.3274C9.2284 22.3072 9.26203 22.303 9.29041 22.3157C13.6546 24.3082 18.3793 24.3082 22.692 22.3157C22.7204 22.302 22.754 22.3062 22.7793 22.3263C22.9128 22.4363 23.0526 22.5464 23.1934 22.6511C23.2418 22.6871 23.2386 22.7623 23.186 22.7929C22.5217 23.1813 21.8312 23.5093 21.1049 23.7834C21.0576 23.8014 21.0365 23.8564 21.0597 23.9019C21.4601 24.6775 21.9174 25.4161 22.4208 26.1166C22.4419 26.1462 22.4797 26.1589 22.5144 26.1483C24.6933 25.4743 26.9028 24.4574 29.1837 22.7824C29.2036 22.7675 29.2162 22.7453 29.2183 22.721C29.7744 16.9689 28.2871 11.9723 25.2756 7.54282C25.2683 7.52801 25.2557 7.51742 25.241 7.51108ZM11.5776 19.6904C10.2637 19.6904 9.1811 18.4841 9.1811 17.0027C9.1811 15.5213 10.2427 14.315 11.5776 14.315C12.923 14.315 13.9952 15.5319 13.9741 17.0027C13.9741 18.4841 12.9125 19.6904 11.5776 19.6904ZM20.4385 19.6904C19.1246 19.6904 18.0419 18.4841 18.0419 17.0027C18.0419 15.5213 19.1035 14.315 20.4385 14.315C21.7839 14.315 22.856 15.5319 22.835 17.0027C22.835 18.4841 21.7839 19.6904 20.4385 19.6904Z" fill="white"/>
                    </svg>
                    </div>
                </ul> 
            </header>
            </div>
        </div>
        </div>
    );
};

export default Footer;