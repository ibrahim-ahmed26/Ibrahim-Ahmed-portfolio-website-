import { supabaseAdmin } from "../lib/supabase/admin";
import ProjectCard from "./ProjectsTable";
export const revalidate = 0
export default async function Projects() {
    const { data: projects, error } = await supabaseAdmin
        .from("projects")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false })

    return (
        <div className="bg-background-black text-zinc-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center p-8">Projects</h1>

            {error && (
                <p className="text-red-500 text-center">
                    Error reading projects: {error.message}
                </p>
            )}

            {!error && (!projects || projects.length === 0) && (
                <p className="text-center text-gray-400">No projects found.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}