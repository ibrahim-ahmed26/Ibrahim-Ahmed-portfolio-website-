export default function Loading() {
    return (
        <div className="bg-background-black text-zinc-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center p-8">Welcome To My Website</h1>
            <div className="flex items-center justify-center p-16">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-zinc-50"></div>
            </div>
            <p className="text-center text-gray-400">Loading content...</p>
        </div>
    )
}