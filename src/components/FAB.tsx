import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, BookOpen, LayoutGrid, PenLine, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function FAB() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const actions = [
  {
    icon: BookOpen,
    label: 'Home',
    path: '/'
  },
  {
    icon: LayoutGrid,
    label: 'Study',
    path: '/categories'
  },
  {
    icon: PenLine,
    label: 'Write',
    path: '/admin'
  }];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20
          }}
          className="absolute bottom-16 right-0 flex flex-col gap-3 mb-4">

            {actions.map((action, index) =>
          <motion.button
            key={action.label}
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: index * 0.1
            }}
            onClick={() => handleNavigate(action.path)}
            className="flex items-center gap-3 bg-white dark:bg-surface-dark shadow-soft dark:shadow-soft-dark px-4 py-3 rounded-full text-sm font-medium hover:text-gold dark:hover:text-gold-dark transition-colors">

                <span className="whitespace-nowrap">{action.label}</span>
                <div className="w-8 h-8 rounded-full bg-surface dark:bg-bg-dark flex items-center justify-center">
                  <action.icon className="w-4 h-4" />
                </div>
              </motion.button>
          )}
          </motion.div>
        }
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gold dark:bg-gold-dark text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Menu">

        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}>

          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </button>
    </div>);

}