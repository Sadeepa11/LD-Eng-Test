import { useParams,useNavigate } from 'react-router-dom';

// IMAGES

import A_Series_HCP from './assets/imgs/pump_images/A Series - HCP.webp';
import AF_Series_HCP from './assets/imgs/pump_images/AF Series - HCP.webp';
import AFC_Series_HCP from './assets/imgs/pump_images/AFC Series - HCP.webp';
import AHI_Series_APEC from './assets/imgs/pump_images/AHI Series - APEC.webp';
import AHS_Series_APEC from './assets/imgs/pump_images/AHS Series - APEC.png';
import AL_Series_HCP from './assets/imgs/pump_images/AL Series - HCP.webp';
import AVC_Series_APEC from './assets/imgs/pump_images/AVC Series - APEC.png';
import BHI_BHS_Series_APEC from './assets/imgs/pump_images/BHI - BHS Series - APEC.png';
import CTF_Series_SINOMEC from './assets/imgs/pump_images/CTF Series - SINOMEC.png';
import ELS_Series_EVERGUSH from './assets/imgs/pump_images/ELS Series - EVERGUSH.jpg';
import F_Series_HCP from './assets/imgs/pump_images/F Series - HCP.webp';
// import FN_Series_HCP from './assets/imgs/pump_images/FN Series - HCP.jpg';
import GD_Series_HCP from './assets/imgs/pump_images/GD Series - HCP.webp';
import GDR_Series_HCP from './assets/imgs/pump_images/GDR Series - HCP.jpg';
import GF_Grinder_Pump_HCP from './assets/imgs/pump_images/GF Grinder Pump - HCP.jpg';
import HD_Series_HCP from './assets/imgs/pump_images/HD Series - HCP.jpg';
import HDG_Series_HCP from './assets/imgs/pump_images/HDG Series - HCP.webp';
import HK_Air_Pump_APEC from './assets/imgs/pump_images/HK Series - APEC.gif';
import IC_Series_HCP from './assets/imgs/pump_images/IC Series - HCP.webp';
import J_Aerator_HCP from './assets/imgs/pump_images/J Series - HCP.jpg';
import JA_Aerator_APEC from './assets/imgs/pump_images/JA Series - APEC.png';
import JDS_Pump_APEC from './assets/imgs/pump_images/JDS Pump - APEC.png';
import JDSK_Cutter_Pump_APEC from './assets/imgs/pump_images/JDSK Cutter Pump - APEC.png';
import JKD_Series_APEC from './assets/imgs/pump_images/JKD Series - APEC.jpg';
import JKS_Series_APEC from './assets/imgs/pump_images/JKS Series - APEC.png';
import JSB_Series_APEC from './assets/imgs/pump_images/JSB Series - APEC.png';
import JSG_Grinder_Pump_APEC from './assets/imgs/pump_images/JSG Grinder Pump - APEC.png';
import KJ_Series_APEC from './assets/imgs/pump_images/KJ Series -APEC.jpg';
import L_Series_HCP from './assets/imgs/pump_images/L Series - HCP.jpg';
import POND_Series_HCP_Pond_Catagory from './assets/imgs/pump_images/POND Series - HCP - Pond Catagory.webp';
import PW_AR_Series_SEA_WATER_WALRUS from './assets/imgs/pump_images/PW - AR Series - SEA WATER - WALRUS.jpg';
import PW_POND_Catagory_WALRUS from './assets/imgs/pump_images/PW - POND Catagory - WALRUS.jpg';
import SC_Series_APEC from './assets/imgs/pump_images/SC Series - APEC.png';
import SE_Series_APEC from './assets/imgs/pump_images/SE Series - APEC.jpg';
import SMSP_Pump_Chemical_SINOMEC from './assets/imgs/pump_images/SMSP Pump - Chemical - SINOMEC.png';
import TH_Series_WALRUS from './assets/imgs/pump_images/TH Series - APEC.jpg';
import TP_Series_WALRUS from './assets/imgs/pump_images/TP Series - WALRUS.jpg';
import TQ_Series_WALRUS from './assets/imgs/pump_images/TQ Series - WALRUS.jpg';
import TQC_Series_WALRUS from './assets/imgs/pump_images/TQC Series - WALRUS.jpg';
import TQCN_Series_WALRUS from './assets/imgs/pump_images/TQCN Series - WALRUS.jpg';
import TS_Series_WALRUS from './assets/imgs/pump_images/TS Series - WALRUS.jpg';
import TSVC_Series_APEC from './assets/imgs/pump_images/TSVC Series - APEC.png';
import LDSP_40_Series_NANTONG from './assets/imgs/pump_images/LDSP_40_Series_NANTONG.jpg';
import DYB from './assets/imgs/pump_images/DYB.jpg';
import fs from './assets/imgs/pump_images/fs.png';
import couplings from './assets/imgs/pump_images/coupling.jpg';
import diffuser from './assets/imgs/pump_images/diffuser.jpg';
import dpc from './assets/imgs/pump_images/dpc.jpg';
import mps from './assets/imgs/pump_images/mps.jpg';
import strainer from './assets/imgs/pump_images/strainer.png';
import NRV from './assets/imgs/pump_images/NRV.png';
import PT from './assets/imgs/pump_images/PT.png';
import AS from './assets/imgs/pump_images/AS.jpg';
import MV from './assets/imgs/pump_images/MV.jpg';
import WPD_WI from './assets/imgs/pump_images/WPD_WI .webp';
import ETK from './assets/imgs/pump_images/ETK.webp';
import MTW from './assets/imgs/pump_images/ETW.jpg';
import MTKD from './assets/imgs/pump_images/MTKD.jpg';


// CATLOGS
import ASCAT from './assets/catalogs/air_stone.pdf';
import AWMCAT from './assets/catalogs/apartment_water_meter.pdf';
import BWMCAT from './assets/catalogs/bulk_water_meter.pdf';
import CSCAT from './assets/catalogs/chemical_&_sea_water.pdf';
import CPCAT from './assets/catalogs/chemical_pumps.pdf';
import DCAT from './assets/catalogs/diffuser.pdf';
import DWMCAT from './assets/catalogs/domestic_water_meters.pdf';
import DPCCAT from './assets/catalogs/DPC_catalog.pdf';
import DYBCAT from './assets/catalogs/DYB.pdf';
import FSCAT from './assets/catalogs/float-switch.pdf';
import PTCAT from './assets/catalogs/pressure_tank.pdf';
import SPCAT from './assets/catalogs/self_priming.pdf';





const ProductDetail = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const productData = {
    'submersible-pumps': {
      title: 'Submersible Pumps',
      description: 'Submersible Pumps for various applications including cutter, grinder, dewatering, and more.',
      subcategories: [
        {
          name: 'Cutter Pumps',
          models: [
            { name: 'JDSK Series (Brand: APEC)', img: JDSK_Cutter_Pump_APEC },

            { name: 'AFC Series (Brand: HCP)', img: AFC_Series_HCP },

          ],
        },
        {
          name: 'Grinder Pumps',
          models: [
            { name: 'JSG Series (Brand: APEC)', img: JSG_Grinder_Pump_APEC },
            { name: 'GF Series (Brand: HCP)', img: GF_Grinder_Pump_HCP },
          ],
        },
        {
          name: 'Waste Water/Sewage',
          models: [
            { name: 'JDS Series (Brand: APEC)', img: JDS_Pump_APEC },
            { name: 'F Series (Brand: HCP)', img: F_Series_HCP },
            { name: 'AF Series (Brand: HCP)', img: AF_Series_HCP },
          ],
        },
        {
          name: 'Chemical & Sea Water',
          models: [
            { name: 'JSB Series (Brand: APEC)', img: JSB_Series_APEC },
            { name: 'IC Series (Brand: HCP)', img: IC_Series_HCP },
            { name: 'HD Series (Brand: HCP)', img: HD_Series_HCP },
            { name: 'PW Series (Brand: WALRUS)', img: PW_AR_Series_SEA_WATER_WALRUS },
          ],
          cat:CPCAT
        },
        {
          name: 'Pond',
          models: [
            { name: 'PW Series Pond (Brand: WALRUS)', img: PW_POND_Catagory_WALRUS },
            { name: 'POND Series (Brand: APEC)', img: POND_Series_HCP_Pond_Catagory },
          ],
        },
        {
          name: 'Sludge Transfer',
          models: [
            { name: 'HDG Series (Brand: HCP)', img: HDG_Series_HCP },
            { name: 'JKD Series (Brand: APEC)', img: JKD_Series_APEC },
          ],
        },
        {
          name: 'Dewatering',
          models: [
            { name: 'L Series (Brand: HCP)', img: L_Series_HCP },
            { name: 'AL Series (Brand: HCP)', img: AL_Series_HCP },
            { name: 'IC Series (Brand: HCP)', img: IC_Series_HCP },
            { name: 'HD Series (Brand: HCP)', img: HD_Series_HCP },
            { name: 'A Series (Brand: HCP)', img: A_Series_HCP },
            { name: 'GD Series (Brand: HCP)', img: GD_Series_HCP },
            { name: 'GDR Series (Brand: HCP)', img: GDR_Series_HCP },
            { name: 'JKS Series (Brand: APEC)', img: JKS_Series_APEC },
            { name: 'AHS Series (Brand: APEC)', img: AHS_Series_APEC },
            { name: 'KJ Series (Brand: APEC)', img: KJ_Series_APEC },
            { name: 'CTF Series (Brand: NANTONG)', img: CTF_Series_SINOMEC },
          ],
        },
      ],
    },
    'centrifugal-pump': {
      title: 'Centrifugal Pump',
      description: 'Various centrifugal pumps for transfer, multistage, booster, and hot water applications.',
      subcategories: [
        {
          name: 'Transfer Pumps',
          models: [
            { name: 'TQC (Brand: WALRUS)', img: TQC_Series_WALRUS },
            { name: 'TP (Brand: WALRUS)', img: TP_Series_WALRUS },
            { name: 'TS (Brand: WALRUS)', img: TS_Series_WALRUS },
            { name: 'SC (Brand: APEC)', img: SC_Series_APEC },
            { name: 'SE (Brand: APEC)', img: SE_Series_APEC },
            { name: 'TSVC (Brand: APEC)', img: TSVC_Series_APEC },
          ],
        },
        {
          name: 'Horizontal Multistage',
          models: [
            { name: 'AHI (Brand: APEC)', img: AHI_Series_APEC },
            { name: 'BHI (Brand: APEC)', img: BHI_BHS_Series_APEC },
            { name: 'BHS (Brand: APEC)', img: BHI_BHS_Series_APEC },
          ],
        },
        {
          name: 'Vertical Multistage',
          models: [
            { name: 'AVC (Brand: APEC)', img: AVC_Series_APEC },
          ],
        },
        {
          name: 'Chemical & Sea Water',
          models: [
            { name: 'SC (Brand: APEC)', img: SC_Series_APEC },
            { name: 'ELS (Brand: EVERGUSH)', img: ELS_Series_EVERGUSH },
            { name: 'LDSP 40 (Brand: NANTONG)', img: LDSP_40_Series_NANTONG },
          ],
          cat:CSCAT
        },
        {
          name: 'Self Priming',
          models: [
            { name: 'SMSP (Brand: SINOMEC)', img: SMSP_Pump_Chemical_SINOMEC },
          ],
          cat:SPCAT
        },
        {
          name: 'Booster',
          models: [
            { name: 'TQ (Brand: WALRUS)', img: TQ_Series_WALRUS },
          ],
        },
        {
          name: 'Hot Water',
          models: [
            { name: 'TQCN (Brand: WALRUS)', img: TQCN_Series_WALRUS },
          ],
        },
        {
          name: 'Atomize Pump',
          models: [
            { name: 'TH (Brand: WALRUS)', img: TH_Series_WALRUS },
          ],
        },
      ],
    },
    'fuel-pump': {
      title: 'Fuel Pump',
      description: 'Fuel Pumps for various applications.',
      subcategories: [
        {
          name: 'Fuel Pump',
          models: [
            {name:'DYB (Brand: NANTONG)',img : DYB }
 
          ],
          cat:DYBCAT
        },
      ],
    },
  'aerators-air-pump': {
    title: 'Aerators & Air Pump',
    description: 'Aerators and air pumps for water applications.',
    subcategories: [
      {
        name: 'Aerator',
        models: [
          { name: 'JA (Brand: APEC)', img: JA_Aerator_APEC },
          { name: 'J (Brand: HCP)', img: J_Aerator_HCP },
        ],
      },
      {
        name: 'Air Pump',
        models: [
          { name: 'HK (Brand: APEC)', img: HK_Air_Pump_APEC },
        ],
      },
    ],
  },
    'air-stones': {
      title: 'Air Stones',
      description: 'Air stones and manifold valves for water treatment.',
      subcategories: [
        {
          name: 'Air Stones',
          models: [
            {name:'Type A,B,C,D & Nano', img:AS}
          ],
          cat:ASCAT
        },
        {
          name: 'Manifold Valve',
          models: [
        
            {name:'2-way, 4-way & 8-way' ,img:MV}
          ],
        },
      ],
    },
    'float-switch': {
      title: 'Float Switch',
      description: 'Float switches for various water level monitoring applications.',
      subcategories: [
        {
          name: 'Float Switch',
          models: [

            {name:'5m & 10m Float switch (Catalog Only)',img:fs}

          ],
          cat:FSCAT
        },
      ],
    },
    'couplings': {
      title: 'Couplings',
      description: 'Couplings for mechanical power transmission.',
      subcategories: [
        {
          name: 'Couplings',
          models: [

            {name:'Couplings', img:couplings }
            
          ],
        },
      ],
    },
    'diffuser': {
      title: 'Diffuser',
      description: 'Diffusers for aeration and water treatment.',
      subcategories: [
        {
          name: 'Diffuser',
          models: [

            {name:'8", 10", 12" Diffuser (Catalog & Image Only)',img:diffuser}
            
          ],
          cat:DCAT
        },
      ],
    },
    'other-accessories': {
      title: 'Other Accessories',
      description: 'Various accessories for pumps and water treatment systems.',
      subcategories: [
        {
          name: 'Digital Pressure Controller',
          models: [

            {name: 'DPC 10 & DPC 25 (EVAK)',img:dpc}
           
          ],
          cat:DPCCAT
        },
        {
          name: 'Mechanical Pressure Switch',
          models: [

            {name: 'Mechanical Pressure Switch (Image Only)',img:mps}
           
          ],
        },
        {
          name: 'Strainer',
          models: [
            {name: 'Strainer (Image Only)',img:strainer}
           
          ],
        },
        {
          name: 'Non Return Valve',
          models: [
            {name: 'Non Return Valve (Image Only)',img:NRV}
           
          ],
        },
        {
          name: 'Pressure Tank',
          models: [
            {name:'Pressure Tank (Catalog)',img:PT}
            
          ],
          cat:PTCAT
        },
      ],
    },
    'water-meters': {
      title: 'Water Meters',
      description: 'Water meters for bulk and domestic usage.',
      subcategories: [
        {
          name: 'Bulk Water Meters',
          models: [
            {name:'WPD_WI (ZENNER) (Flange Type)',img:WPD_WI}
            
          ],
          cat:BWMCAT
        },
        {
          name: 'Apartments',
          models: [

            {name:'ETK (ZENNER) (Threaded Type)',img:ETK}
            
          ],
          cat:AWMCAT
        },
        {
          name: 'Domestic Water Meters',
          models: [
            {name:'MTKD_RNK (ZENNER)',img:MTKD},
            {name:'MTW_ETW (ZENNER)',img:MTW}
            
            
          ],
          cat:DWMCAT
        },
      ],
    },
  }

  const getProduct = productData[productName];

  
  if (!getProduct) {
    return (
    
        <div className="p-6">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <p className="text-gray-600">The product you are looking for does not exist.</p>
      </div>
 
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{getProduct.title}</h1>
        <p className="text-lg text-gray-600">{getProduct.description}</p>
      </div>

      {/* Categories Section */}
      <div className="space-y-12">
        {getProduct.subcategories.map((subcategory, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Category Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800">
                {subcategory.name}
              </h3>

              {subcategory.cat && (
                <a 
                  href={subcategory.cat} 
                  download 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Catalog
                </a>
              )}
            </div>

            {/* Models Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {subcategory.models.map((model, modelIndex) => {
                  if (typeof model === 'object') {
                    return (
                      <div
                        key={modelIndex}
                        onClick={() => navigate(`/products/${productName}/${model.name}`)}
                        className=" cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                      >
                        {/* Image Container with fixed aspect ratio */}
                        <div className="relative pt-[100%] bg-gray-50">
                          <img
                            src={model.img}
                            alt={model.name}
                            className="absolute inset-0 w-full h-full object-contain p-4"
                            loading="lazy"
                          />
                        </div>
                        {/* Model Info */}
                        <div className="p-4 border-t border-gray-200 flex-grow">
                          <h4 className="text-lg font-medium text-gray-900 line-clamp-2 mb-2">
                            {model.name}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {model.name.split('(')[1]?.replace(')', '') || 'Generic'}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (typeof model === 'string') {
                    return (
                      <div
                        key={modelIndex}
                        className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between col-span-1"
                      >
                        <span className="text-gray-700">{model}</span>
                        <span className="text-sm text-gray-500">
                          {model.includes('(') ? 
                            model.split('(')[1].replace(')', '') : 
                            'Details Available'}
                        </span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ProductDetail;
