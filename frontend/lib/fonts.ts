import {Poppins, DM_Sans} from 'next/font/google';

const poppins = Poppins({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['italic', 'normal'] });

const dmSans = DM_Sans({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['italic', 'normal'] });

export {
    poppins,
    dmSans
}