document.addEventListener('DOMContentLoaded', () => {
    const gradesData = {
        preschool: {
            'عالمي': ['KG1', 'KG2', 'KG3'],
            'وطني': ['KG1', 'KG2']
        },
        elementary_boys: {
            'عالمي': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'],
            'وطني': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        elementary_girls: {
            'عالمي': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6'],
            'وطني': ['G1', 'G2', 'G3', 'G4', 'G5', 'G6']
        },
        middle_boys: {
            'عالمي': ['أولى متوسط عالمي', 'ثاني متوسط عالمي', 'ثالث متوسط عالمي'],
            'وطني': ['أولى متوسط وطني', 'ثاني متوسط وطني', 'ثالث متوسط وطني']
        },
        middle_girls: {
            'عالمي': ['أولى متوسط عالمي', 'ثاني متوسط عالمي', 'ثالث متوسط عالمي'],
            'وطني': ['أولى متوسط وطني', 'ثاني متوسط وطني', 'ثالث متوسط وطني']
        },
        high_boys: {
            'وطني': ['أولى ثانوي وطني', 'ثاني ثانوي وطني', 'ثالث ثانوي وطني']
        },
        high_girls: {
            'وطني': ['أولى ثانوي وطني', 'ثاني ثانوي وطني', 'ثالث ثانوي وطني']
        }
    };

    const stageSelect = document.getElementById('stage');
    const trackSelect = document.getElementById('track');
    const gradeSelect = document.getElementById('grade');

    function populateDropdown(selectElement, items) {
        selectElement.innerHTML = `<option value="">اختر ${selectElement.id === 'track' ? 'المسار' : 'القسم'}</option>`;
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        });
    }

    stageSelect.addEventListener('change', () => {
        const selectedStage = stageSelect.value;

        trackSelect.innerHTML = '<option value="">اختر المسار</option>';
        trackSelect.disabled = true;
        gradeSelect.innerHTML = '<option value="">اختر القسم</option>';
        gradeSelect.disabled = true;

        if (selectedStage && gradesData[selectedStage]) {
            const tracks = Object.keys(gradesData[selectedStage]);
            populateDropdown(trackSelect, tracks);
            trackSelect.disabled = false;
        }
    });

    trackSelect.addEventListener('change', () => {
        const selectedStage = stageSelect.value;
        const selectedTrack = trackSelect.value;

        gradeSelect.innerHTML = '<option value="">اختر القسم</option>';
        gradeSelect.disabled = true;

        if (selectedStage && selectedTrack && gradesData[selectedStage][selectedTrack]) {
            const grades = gradesData[selectedStage][selectedTrack];
            populateDropdown(gradeSelect, grades);
            gradeSelect.disabled = false;
        }
    });
});
