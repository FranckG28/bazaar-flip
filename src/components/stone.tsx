import { Item } from "@/models/item";
import { nFormatter } from "@/services/utils";
import { MinecraftSkinViewer } from "@yannichock/react-minecraft-skin-viewer";

export default function StoneComponent({ item }: { item: Item }) {
    return <div key={item.id} className="flex flex-row gap-2">
        <MinecraftSkinViewer
            skin={item.skinUrl}
            width={64}
            height={64}
            zoom={false}
            background="transparent"
        />
        <p className='flex gap-2 items-baseline'>
            <span className='text-indigo-800 font-bold'>{item.name}</span>
            <span className='rounded-full px-2 bg-green-200 text-green-800'>Buy : {nFormatter(item.buyPrice, 2)}</span>
            <span className='rounded-full px-2 bg-red-200 text-red-800'>Sell : {nFormatter(item.sellPrice, 2)}</span>
        </p>
    </div>
}