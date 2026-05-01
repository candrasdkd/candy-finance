import MonthlyAllocationTable from '../components/MonthlyAllocationTable';
import { motion } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';

export default function Planning() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-8 pb-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-rose-400 mb-1">
            <Sparkles className="w-4 h-4 fill-rose-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Financial Planning</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-sage-900 tracking-tight">
            Perencanaan Bulanan
          </h1>
          <p className="text-sage-400 font-medium">
            Atur pembagian pos pengeluaran rutin bersama pasangan di sini.
          </p>
        </div>
      </div>

      <div className="bg-sage-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-lg">Apa itu Perencanaan?</h4>
            <p className="text-sage-300 text-sm leading-relaxed max-w-2xl">
              Halaman ini digunakan untuk mencatat pengeluaran rutin yang sifatnya tetap atau terencana setiap bulannya. 
              Data di sini hanya bersifat sebagai panduan/info agar kamu dan pasangan tahu siapa yang harus membayar apa.
            </p>
          </div>
        </div>
      </div>

      <MonthlyAllocationTable />
    </motion.div>
  );
}
