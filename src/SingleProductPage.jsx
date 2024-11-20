import { useParams, useNavigate } from 'react-router-dom';
import A_Series_HCP from './assets/imgs/pump_images/A Series - HCP.webp';
import AF_Series_HCP from './assets/imgs/pump_images/AF Series - HCP.webp';
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
// import PARAGON_Pump from './assets/imgs/pump_images/PARAGON Pump.jpg';
import POND_Series_HCP_Pond_Catagory from './assets/imgs/pump_images/POND Series - HCP - Pond Catagory.webp';
// import PW_AR_Series_SEA_WATER_WALRUS from './assets/imgs/pump_images/PW - AR Series - SEA WATER - WALRUS.jpg';
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


const SingleProductPage = () => {
  const { modelName } = useParams();
  const navigate = useNavigate();

  // Find the product and model data from your existing productData

  const productData = {
    'JDSK Series (Brand: APEC)': {
      name: 'JDSK Series (Brand: APEC)',
      image: JDSK_Cutter_Pump_APEC
    },
    'A Series (Brand: HCP)': {
      name: 'A Series (Brand: HCP)',
      image: A_Series_HCP
    },
    'AHS Series (Brand: APEC)': {
      name: 'AHS Series (Brand: APEC)',
      image: AHS_Series_APEC
    },
    'AL Series (Brand: HCP)': {
      name: 'AL Series (Brand: HCP)',
      image: AL_Series_HCP
    },
    'CTF Series (Brand: NANTONG)': {
      name: 'CTF Series (Brand: NANTONG)',
      image: CTF_Series_SINOMEC
    },
    'GD Series (Brand: HCP)': {
      name: 'GD Series (Brand: HCP)',
      image: GD_Series_HCP
    },
    'GDR Series (Brand: HCP)': {
      name: 'GDR Series (Brand: HCP)',
      image: GDR_Series_HCP
    },
    'JKS Series (Brand: APEC)': {
      name: 'JKS Series (Brand: APEC)',
      image: JKS_Series_APEC
    },
    'KJ Series (Brand: APEC)': {
      name: 'KJ Series (Brand: APEC)',
      image: KJ_Series_APEC
    },
    'L Series (Brand: HCP)': {
      name: 'L Series (Brand: HCP)',
      image: L_Series_HCP
    },
    'JSG Series (Brand: APEC)': {
      name: 'JSG Series',
      image: JSG_Grinder_Pump_APEC
    },
    'GF Series (Brand: HCP)': {
      name: 'GF Series (Brand: HCP)',
      image: GF_Grinder_Pump_HCP
    },
    'JDS Series (Brand: APEC)': {
      name: 'JDS Series (Brand: APEC)',
      image: JDS_Pump_APEC
    },
    'F Series (Brand: HCP)': {
      name: 'F Series (Brand: HCP)',
      image: F_Series_HCP
    },
    'AF Series (Brand: HCP)': {
      name: 'AF Series (Brand: HCP)',
      image: AF_Series_HCP
    },
    'JSB Series (Brand: APEC)': {
      name: 'JSB Series (Brand: APEC)',
      image: JSB_Series_APEC
    },
    'IC Series (Brand: HCP)': {
      name: 'IC Series (Brand: HCP)',
      image: IC_Series_HCP
    },
    'HD Series (Brand: HCP)': {
      name: 'HD Series (Brand: HCP)',
      image: HD_Series_HCP
    },
    'PW Series (Brand: WALRUS)': {
      name: 'PW Series (Brand: WALRUS)',
      image:PW_POND_Catagory_WALRUS
    },
    'POND Series (Brand: APEC)': {
      name: 'POND Series (Brand: APEC)',
      image: POND_Series_HCP_Pond_Catagory
    },
    'HDG Series (Brand: HCP)': {
      name: 'HDG Series (Brand: HCP)',
      image: HDG_Series_HCP
    },
    'JKD Series (Brand: APEC)': {
      name: 'JKD Series (Brand: APEC)',
      image: JKD_Series_APEC
    },
    'TQC (Brand: WALRUS)': {
      name: 'TQC (Brand: WALRUS)',
      image: TQC_Series_WALRUS
    },
    'TP (Brand: WALRUS)': {
      name: 'TP (Brand: WALRUS)',
      image: TP_Series_WALRUS
    },
    'TS (Brand: WALRUS)': {
      name: 'TS (Brand: WALRUS)',
      image: TS_Series_WALRUS
    },
    'SC (Brand: APEC)': {
      name: 'SC (Brand: APEC)',
      image: SC_Series_APEC
    },
    'SE (Brand: APEC)': {
      name: 'SE (Brand: APEC)',
      image: SE_Series_APEC
    },
    'TSVC (Brand: APEC)': {
      name: 'TSVC (Brand: APEC)',
      image: TSVC_Series_APEC
    },
    'AHI (Brand: APEC)': {
      name: 'AHI (Brand: APEC)',
      image: AHI_Series_APEC
    },
    'BHI (Brand: APEC)': {
      name: 'BHI (Brand: APEC)',
      image: BHI_BHS_Series_APEC
    },
    'AVC (Brand: APEC)': {
      name: 'AVC (Brand: APEC)',
      image: AVC_Series_APEC
    },
    'ELS (Brand: EVERGUSH)': {
      name: 'ELS (Brand: EVERGUSH)',
      image: ELS_Series_EVERGUSH
    },
    'SMSP (Brand: SINOMEC)': {
      name: 'SMSP (Brand: SINOMEC)',
      image: SMSP_Pump_Chemical_SINOMEC
    },
    'TQ (Brand: WALRUS)': {
      name: 'TQ (Brand: WALRUS)',
      image: TQ_Series_WALRUS
    },
    'TQCN (Brand: WALRUS)': {
      name: 'TQCN (Brand: WALRUS)',
      image: TQCN_Series_WALRUS
    },
    'TH (Brand: WALRUS)': {
      name: 'TH (Brand: WALRUS)',
      image: TH_Series_WALRUS
    },
    'JA (Brand: APEC)': {
      name: 'JA (Brand: APEC)',
      image: JA_Aerator_APEC
    },
    'J (Brand: HCP)': {
      name: 'J (Brand: HCP)',
      image: J_Aerator_HCP
    },
    'HK (Brand: APEC)': {
      name: 'HK (Brand: APEC)',
      image: HK_Air_Pump_APEC
    }
  };
  
  // const findProductAndModel = () => {
  //   const product = productData[productName];
  //   if (!product) return null;

  //   let foundModel = null;
  //   let foundSubcategory = null;

  //   product.subcategories.some(subcategory => {
  //     const model = subcategory.models.find(m => 
  //       typeof m === 'object' && m.name === modelName
  //     );
  //     if (model) {
  //       foundModel = model;
  //       foundSubcategory = subcategory;
  //       return true;
  //     }
  //     return false;
  //   });

  //   return { product, model: foundModel, subcategory: foundSubcategory };
  // };

  // const productInfo = findProductAndModel();
  const product = productData[modelName];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <p className="mt-2 text-gray-600">The product you are looking for does not exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
        >
          ← Back to Products
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-lg text-gray-600">This is a brief description of the {product.name}.</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="mt-1 text-sm text-gray-900">{modelName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Brand</dt>
                  <dd className="mt-1 text-sm text-gray-900">{modelName.split('(')[1]?.replace(')', '') || 'Generic'}</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-sm text-gray-600">Detailed description of the {product.name} goes here.</p>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <button
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={() => {
                  // Add contact or inquiry functionality here
                  window.location.href = `mailto:inquiry@example.com?subject=Inquiry about ${product.name}`;
                }}
              >
                Contact for Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SingleProductPage;
