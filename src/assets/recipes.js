/* Template 
{
        id: 0,
        title: '',
        category: '',
        portions: '',
        image: '',
        ingredients: {
            amount: [3],
            unit: ['dl'],
            ingredient: ['Mjölk'],
        },
        instructions: [
            '1. ',
            '2. ',
            '3. ',
            '4. ',
            '5. '
        ],
    },
*/

export const recipes = [
    {
        id: '0',
        title: 'Kyckling i sötsur sås',
        category: 'Kyckling',
        portions: '6',
        image: 'https://cdn1.tasteline.com/Kyckling-i-sotsur-sas-sanna-livijn-360x360.jpg',
        ingredients: {
            amount: [1, 1.5, 1, 825, 4.5, 1.5, 4.5, 3, 1.5, 3, 6],
            unit: ['st', 'st', 'burk', 'g', 'dl', 'dl', 'msk', 'msk', 'msk', 'tsk', 'port'],
            ingredient: ['Gul lök', 'Paprika', 'Ananas', 'Kyckling', 'Vatten', 'Sweet chilisås', 'Kycklingfond', 'Tomatpuré', 'Mjöl', 'Vitvinsvinäger', 'Ris'],
        },
        instructions: [
            '1. Skala och klyfta löken. Skölj och skär paprika i bitar.',
            '2. Koka ris enligt anvisning på förpackningen.', 
            '3. Hetta upp olja i en stekpanna och fräs kycklingstrimlorna så att de får fin färg. Tillsätt lök, paprika och ananas och stek under omrörning ca 5 min.',
            '4. Koka ihop vatten, sweet chilisås, kycklingfond, tomatpuré, mjöl och vinäger i en liten kastrull. Vispa samman till en slät sås och tillsätt till kycklingfräset. Låt det koka ihop på svag värme ca 5 min. Smaka av med salt och peppar.',
            '5. Servera kycklingen med ris',
        ],
    }, 
    {
        id: '1',
        title: 'Lax med citronsås',
        category: 'Fisk',
        portions: '4',
        image: 'https://img.koket.se/square-large/ugnsbakad-lax-med-citronsas.jpg.webp',
        ingredients: {
            amount: [4, 3, 2, 2, 1, 1, 1, 4],
            unit: ['st', 'dl', 'dl', 'msk', 'st', 'st', 'tsk', 'port'],
            ingredient: ['Laxfilé', 'Grädde', 'Creme fraiche', 'Dill', 'Citron', 'Fiskbuljongtärning', 'Gurkmeja', 'Potatis'],
        },
        instructions: [
            '1. Sätt ugnen på 200 grader.',
            '2. Skär laxen i portionsbitar. Lägg i en ugnssäker form.',
            '3. Lös upp buljongtärningen i ca. 0,5dl hett vatten. Blanda creme fraiche, grädde, dill, skal och saft från citronen, buljong, gurkmeja, salt och peppar i en skål.',
            '4. Blanda såsen väl och häll över laxen. Tillaga mitt i ugnen i 15-20 minuter.',
            '5. Servera laxen med kokt potatis och önskad sallad.'
        ],
    },
]