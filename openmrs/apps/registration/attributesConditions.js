Bahmni.Registration.AttributesConditions = (function () {
    var rules = {
        patient_death_info: function (patient) {
            var YES_CONCEPT_UUID = '1065AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
            var isDead = patient.patient_death_info &&
                         patient.patient_death_info.conceptUuid === YES_CONCEPT_UUID;
            if (isDead) {
                return { show: ['causeOfDeathSection'], hide: [] };
            }
            return { show: [], hide: ['causeOfDeathSection'] };
        }
    };
    return { rules: rules };
}());
