const { default: axios } = require("axios");

class Judge {
    
    constructor(api) {
        this.apiBaseUrl = api;
    }

    async getLanguageId(languageName) {
        try {
            console.log('getLanguageId');
            const response = await axios.get(`${this.apiBaseUrl}/languages`);
            const languages = response.data;
            const language = languages.filter((language) =>
                language.name.toLowerCase().includes(languageName.toLowerCase())
            );
            if (!language) {
                throw new Error(`Language not found: ${languageName}`);
            }
            return language;
        } catch (error) {
            throw new Error(`Failed to get language ID: ${error.message}`);
        }
    }

    async submitCode(sourceCode, languageId, stdin = '', expectedOutput = null) {
        try {
            const response = await axios.post(`${this.apiBaseUrl}/submissions`, {
                source_code: sourceCode,
                language_id: languageId,
                stdin: stdin,
                expected_output: expectedOutput,
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to submit code: ${error.message}`);
        }
    }


    async getSubmissionDetails(submissionId,base64Encoded = false, fields = 'stdout,time,memory,stderr,token,compile_output,message,status') {
        try {
           
            const response = await axios.get(`${this.apiBaseUrl}/submissions/${submissionId}`,);
            return response.data;
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                throw new Error(`Request to get submission details timed out after ${timeout / 1000} seconds`);
            }
            throw new Error(`Failed to get submission details: ${error.message}`);
        }
    }

    
    async getSubmissions({ base64Encoded = false, fields = 'stdout,time,memory,stderr,token,compile_output,message,status', page = 1, perPage = 20 } = {}
    ) {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/submissions`, {
                params: {
                    base64_encoded: base64Encoded,
                    fields,
                    page,
                    per_page: perPage,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get submissions: ${error.message}`);
        }
    }


    async createBatchSubmissions(submissions, { base64Encoded = false } = {}) {
        try {
            const response = await axios.post(`${this.apiBaseUrl}/submissions/batch`, { submissions }, {

                params: {
                    base64_encoded: base64Encoded,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to create batch submissions: ${error.message}`);
        }
    }

    async getBatchSubmissions(tokens, { base64Encoded = false, fields = 'stdout,time,memory,stderr,token,compile_output,message,status' } = {}) {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/submissions/batch`, {
                params: {
                    tokens: tokens.join(','),
                    base64_encoded: base64Encoded,
                    fields,
                },
            });
            return response.data.submissions;
        } catch (error) {
            throw new Error(`Failed to get batch submissions: ${error.message}`);
        }
    }

    async submitAndgetResult(sourceCode, languageId, stdin = '', expectedOutput = null){
        try {
            const response = await axios.post(`${this.apiBaseUrl}/submissions`, {
                source_code: sourceCode,
                language_id: languageId,
                stdin: stdin,
                wait:"true",
                expected_output: expectedOutput,
            });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to submit code: ${error.message}`);
        }

    }

    async getStatuses() {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/statuses`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get statuses: ${error.message}`);
        }
    }

    async getVersion() {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/version`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get version: ${error.message}`);
        }
    }



}

module.exports = Judge;