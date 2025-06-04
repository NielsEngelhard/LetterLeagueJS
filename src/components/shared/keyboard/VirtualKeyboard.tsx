import React from 'react';
import { Button } from "@/components/ui/button";
import { Delete, CornerDownLeft } from "lucide-react";
import KeyboardKey from './KeyboardKey';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
  disabled?: boolean;
  usedLetters?: Set<string>;
  correctLetters?: Set<string>;
  wrongPositionLetters?: Set<string>;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  onBackspace,
  onEnter,
  disabled = false,
  usedLetters = new Set(),
  correctLetters = new Set(),
  wrongPositionLetters = new Set()
}) => {
  const keyboardRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-4 space-y-2">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {rowIndex === 2 && (
            <KeyboardKey onKeyPress={onEnter} disabled={disabled} variant='big' className='bg-primary'>
              <CornerDownLeft className="w-4 h-4" />
            </KeyboardKey>
          )}
          
          {row.map((key) => (
            <KeyboardKey
                key={key}
                onKeyPress={() => onKeyPress(key)}
                disabled={disabled}
                variant='default'
                keyValue={key}
            />
          ))}
          
          {rowIndex === 2 && (
            <KeyboardKey onKeyPress={onBackspace} disabled={disabled} variant='big' className='bg-error'>
              <Delete className="w-4 h-4" />
            </KeyboardKey>            
          )}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
