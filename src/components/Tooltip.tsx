import * as TooltipRadix from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

interface TooltipDrops {
  children: ReactNode;
  title: string;
}

export function Tooltip({children, title}: TooltipDrops){
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          {children}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content className="px-2 text-gray-200 rounded backdrop-filter backdrop-blur-md border border-gray-800 bg-gray-800/50" sideOffset={5}>
            {title}
            <TooltipRadix.Arrow className="fill-gray-800/50" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};