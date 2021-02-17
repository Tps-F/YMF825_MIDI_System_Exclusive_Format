# YMF825_MIDI_System_Exclusive_Format
This repository automates the conversion work required to use the "https://github.com/Tps-F/YMF825_sample" tonedata in a real program.

# How to use it
1: Copy the sounds you want to use from the tonedata file (e.g. 0b,01,0f,07,00,06,0f,27,00,01,08,07,0e,03,02,03,02,28,00,05,00,00,00,0d,01,01,04,03,22, 01,01,00,06,0d,02,02,06,04,00,01,01,00)
2. Paste in the link below to the site (https://tps-f.github.io/YMF825_MIDI_System_Exclusive_Format/index.html) and use the converted numbers.

Use it as shown in the code below.

```
void set_tone(void){
  unsigned char tone_data[35] ={
    0x81,//header
    //T_ADR 0
    0x01,0x85,
    0x00,0x7F,0xF4,0xBB,0x00,0x10,0x40,
    0x00,0xAF,0xA0,0x0E,0x03,0x10,0x40,
    0x00,0x2F,0xF3,0x9B,0x00,0x20,0x41,
    0x00,0xAF,0xA0,0x0E,0x01,0x10,0x40,
    0x80,0x03,0x81,0x80,
  };
  
   if_s_write( 0x08, 0xF6 );
   delay(1);
   if_s_write( 0x08, 0x00 );
  
   if_write( 0x07, &tone_data[0], 35 );//write to FIFO
}
```
