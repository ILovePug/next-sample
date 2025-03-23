import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./component'));

export default function DynamicPage() {
    return <div>im dynamic route! <DynamicComponent /></div>
}