// WarrantCheck — Mock External Agency API
const WarrantCheck = {
    // Simulates a check against National Crime Database
    async check(name) {
        console.log(`Checking warrant for: ${name}...`);
        await Helpers.sleep(1500); // Simulate network latency

        // Mock hit for specific name
        if (name && name.toLowerCase().includes('wanted')) {
            return {
                isHit: true,
                details: 'Active Warrant of Arrest (Case #99-102)',
                agency: 'RTC Branch 12, Manila'
            };
        }

        return { isHit: false };
    }
};