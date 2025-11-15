<script lang="ts">
    // Simple data-driven experience page
    const skills = [
        {
            category: 'Frontend',
            items: ['Svelte (2nd best js framework)', 'JavaScript', 'TypeScript', 'Vue (best js framework)', 'React']
        },
        {
            category: 'Backend',
            items: ['Postgres', 'MongoDB', 'Spring', 'FastAPI']
        },
        {
            category: 'Dev & Tools',
            items: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'AWS']
        },
        {
            category: 'Languages',
            items: ['Java', 'C#', 'Python', 'JavaScript']
        },
        {
            category: 'Game dev',
            items: ['Unity', 'Blender', 'C#', 'VR']
        },
        {
            category: 'What i know best',
            items: ['Unity', 'Java', 'C#', 'Spring', 'Vue']
        }
            
    ];

    const experience = [
        {
            role: 'Full-Stack Developer - Summer internship',
            company: 'Sikt',
            period: 'Summer 2025',
            details: [
                'Built responsive single-page apps with React and FastAPI',
                'Collected DOI data from serpAPI',
                'Automated the process with a montly cronjob, running the serpAPI script',
                'Hosting the application with AWS'
            ]
        },
        {
            role: 'Student Assistant',
            company: 'HVL',
            period: 'August 2024 - december 2024',
            details: [
                'Further developed the bachelors project HVLFire, now my masters project'
            ]
        },
        {
            role: 'Assitant at Supported living community',
            period: 'November 2020 - Present',
            details: [
                'Part time helping people with disabileties.'
            ]
        }
    ];

    // small helper to toggle visibility of experience details
    let expanded: Record<number, boolean> = {};
    const toggle = (i: number) => {
        expanded = { ...expanded, [i]: !expanded[i] };
    };
</script>

<main class="mx-auto max-w-4xl my-8 p-4" aria-label="Experience page">
    <header class="mb-4">
        <h1 class="text-2xl font-semibold text-slate-900 mb-1">Experience & Skills</h1>
        <p class="text-sm text-slate-600">What I know — some quite well and some not so well</p>
    </header>

    <section class="mt-6" aria-labelledby="skills-heading">
        <h2 id="skills-heading" class="text-lg font-medium text-slate-900 mb-3">Skills</h2>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {#each skills as s}
                <div class="bg-white rounded-lg p-4 shadow-sm">
                    <h3 class="text-base font-medium text-slate-900 mb-2">{s.category}</h3>
                    <ul class="list-disc list-inside text-slate-600 text-sm">
                        {#each s.items as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </section>

    <section class="mt-8" aria-labelledby="experience-heading">
        <h2 id="experience-heading" class="text-lg font-medium text-slate-900 mb-3">Experience</h2>
        <ol class="list-none m-0 p-0 space-y-3">
            {#each experience as exp, i}
                <li class="bg-white rounded-lg p-4 shadow-sm">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                        <div>
                            <strong class="block text-base text-slate-900">{exp.role}</strong>
                            <div class="text-sm text-slate-600">{exp.company}</div>
                        </div>
                        <div class="flex flex-col items-start md:items-end gap-1">
                            <time class="text-sm text-slate-500">{exp.period}</time>
                            <button
                                class="text-sm px-2 py-1 border border-slate-200 rounded-md hover:bg-slate-50"
                                on:click={() => toggle(i)}
                                aria-expanded={!!expanded[i]}
                                aria-controls={"details-" + i}
                            >
                                {expanded[i] ? 'Hide' : 'Details'}
                            </button>
                        </div>
                    </div>

                    {#if expanded[i]}
                        <ul id={"details-" + i} class="mt-3 pl-5 text-slate-600 list-disc space-y-1">
                            {#each exp.details as d}
                                <li>{d}</li>
                            {/each}
                        </ul>
                    {/if}
                </li>
            {/each}
        </ol>
    </section>
</main>
