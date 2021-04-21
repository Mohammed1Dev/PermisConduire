const {data} = require('joi')
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
            {
           
                full_name: {
                    type: String,
                    required: true,
                },
                email: {
                    type: String,
                    required: true,
                },
                phone: {
                    type: String,
                    required: true,
                },
                password: {
                    type: String,
                    required: true,
                }
            
            },
            {
                timestamps: true,
            }
            );

module.exports = mongoose.model("admin", adminSchema);