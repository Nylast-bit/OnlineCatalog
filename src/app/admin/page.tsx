"use client"
import { useState, useCallback } from 'react';
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react';
import { CustomButton } from '../../../components';
import { motion, AnimatePresence } from 'framer-motion';  // Importar framer-motion
import Swal from 'sweetalert2';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from '@/server/APIs/cloudinary.api';
import { div, image } from 'framer-motion/client';
import { createPlan, planExists } from '@/server/queries/plan.queries';
import { create } from 'domain';
import CustomInputField from '../../../components/CustomInputField';
import '@/app/globals.css';
import TabsLgPill from '../../../components/Tabs';
import Forms from '../../../components/Forms';
import PlanForm from '../../../components/PlanForm';

export default function Admin() {
  

  

  return (
    <div className='ml-10'>
        <TabsLgPill firstComponent={ Forms} secondComponent={ PlanForm} tabLabels={["Crear", "Productos y Servicios"]}/>

    </div>
  );
}
