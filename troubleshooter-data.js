// Marine Electrical Troubleshooter Data (Expanded - Phase 5 - Preventative Maintenance Focus)
window.troubleshooterData = {
    categories: [
        {
            id: "power-distribution",
            name: "Power Distribution",
            description: "Circuit breakers, fuses, power loss",
            icon: "power-distribution.svg",
            issues: [
                {
                    id: "circuit-breaker-trips",
                    name: "Circuit Breaker Trips",
                    description: "Circuit breaker trips repeatedly"
                },
                {
                    id: "complete-power-loss",
                    name: "Complete Power Loss",
                    description: "No power to entire vessel or sections"
                },
                {
                    id: "voltage-fluctuations",
                    name: "Voltage Fluctuations",
                    description: "Unstable voltage readings"
                }
            ]
        },
        {
            id: "battery",
            name: "Battery Systems",
            description: "Charging issues, battery problems",
            icon: "battery.svg",
            issues: [
                {
                    id: "battery-not-holding-charge",
                    name: "Battery Not Holding Charge",
                    description: "Battery drains quickly or won\u0027t maintain charge"
                },
                {
                    id: "charging-system-failures",
                    name: "Charging System Failures",
                    description: "Problems with alternator or shore charger"
                },
                {
                    id: "battery-overheating-swelling",
                    name: "Battery Overheating/Swelling",
                    description: "Battery is hot to touch or physically swollen"
                }
            ]
        },
        {
            id: "navigation",
            name: "Navigation Equipment",
            description: "Navigation lights, electronics",
            icon: "navigation.svg",
            issues: [
                {
                    id: "intermittent-equipment-failures",
                    name: "Intermittent Equipment Failures",
                    description: "Navigation equipment works inconsistently"
                },
                {
                    id: "navigation-light-failures",
                    name: "Navigation Light Failures",
                    description: "Navigation lights not working properly"
                }
            ]
        },
        {
            id: "lighting",
            name: "Lighting \u0026 Interior",
            description: "Lights, outlets, interior electrical",
            icon: "lighting.svg",
            issues: [
                {
                    id: "lights-dimming",
                    name: "Lights Dimming",
                    description: "Lights dim when equipment starts"
                },
                {
                    id: "non-functional-outlets",
                    name: "Non-functional Outlets",
                    description: "Outlets not providing power"
                }
            ]
        },
        {
            id: "engine",
            name: "Engine \u0026 Propulsion",
            description: "Starter, ignition, engine controls",
            icon: "engine.svg",
            issues: [
                {
                    id: "starter-motor-problems",
                    name: "Starter Motor Problems",
                    description: "Engine won\u0027t start or starts poorly"
                },
                {
                    id: "engine-control-unit-issues",
                    name: "Engine Control Unit Issues",
                    description: "Engine control electronics malfunctioning"
                },
                {
                    id: "engine-wiring-fire-hazard",
                    name: "Engine Wiring Fire Hazard",
                    description: "Smell of burning plastic, smoke from engine area"
                }
            ]
        },
        {
            id: "safety",
            name: "Safety Systems",
            description: "Emergency lights, alarms, bilge pumps",
            icon: "safety.svg",
            issues: [
                {
                    id: "emergency-lighting-issues",
                    name: "Emergency Lighting Issues",
                    description: "Emergency lights not functioning properly"
                },
                {
                    id: "bilge-pump-electrical-problems",
                    name: "Bilge Pump Electrical Problems",
                    description: "Bilge pumps not operating correctly"
                }
            ]
        },
        {
            id: "environmental",
            name: "Environmental Systems",
            description: "HVAC, refrigeration, water systems",
            icon: "environmental.svg",
            issues: [
                {
                    id: "hvac-electrical-problems",
                    name: "HVAC Electrical Problems",
                    description: "Heating/cooling system electrical issues"
                },
                {
                    id: "refrigeration-system-electrical-failures",
                    name: "Refrigeration System Electrical Failures",
                    description: "Refrigeration not working properly"
                }
            ]
        },
        {
            id: "corrosion",
            name: "Corrosion \u0026 Damage",
            description: "Galvanic corrosion, wire damage",
            icon: "corrosion.svg",
            issues: [
                {
                    id: "galvanic-corrosion-issues",
                    name: "Galvanic Corrosion Issues",
                    description: "Corrosion on underwater metals or connections"
                },
                {
                    id: "wire-chafing-damage",
                    name: "Wire Chafing and Physical Damage",
                    description: "Damaged wiring insulation or conductors"
                }
            ]
        },
        {
            id: "grounding",
            name: "Grounding \u0026 Bonding",
            description: "Stray current, electric shock",
            icon: "grounding.svg",
            issues: [
                {
                    id: "stray-current-problems",
                    name: "Stray Current Problems",
                    description: "Electrical current in water or on hull"
                },
                {
                    id: "electric-shock-reports",
                    name: "Electric Shock Reports",
                    description: "Shocks when touching vessel or in water nearby"
                }
            ]
        }
    ],
    
    // Decision trees for each issue (Expanded - Phase 5 - Preventative Maintenance Focus)
    decisionTrees: {
        "circuit-breaker-trips": { 
            start: {
                question: "When does the circuit breaker trip?",
                answers: [
                    {
                        text: "Immediately when turned on",
                        next: "immediate-trip"
                    },
                    {
                        text: "After running for some time",
                        next: "delayed-trip"
                    }
                ]
            },
            "immediate-trip": {
                question: "Is there a burning smell or visible damage?",
                answers: [
                    {
                        text: "Yes",
                        next: "short-circuit-diagnosis"
                    },
                    {
                        text: "No",
                        next: "all-devices-disconnected"
                    }
                ]
            },
            "all-devices-disconnected": {
                question: "Does it happen with all devices disconnected?",
                answers: [
                    {
                        text: "Yes",
                        next: "faulty-breaker-diagnosis"
                    },
                    {
                        text: "No",
                        next: "specific-equipment"
                    }
                ]
            },
            "specific-equipment": {
                question: "Does it happen only when specific equipment is connected?",
                answers: [
                    {
                        text: "Yes",
                        next: "equipment-fault-diagnosis"
                    },
                    {
                        text: "No",
                        next: "intermittent-wiring-diagnosis"
                    }
                ]
            },
            "delayed-trip": {
                question: "Does it happen during rough seas or vibration?",
                answers: [
                    {
                        text: "Yes",
                        next: "loose-connection-diagnosis"
                    },
                    {
                        text: "No",
                        next: "multiple-devices"
                    }
                ]
            },
            "multiple-devices": {
                question: "Does it happen when multiple devices are running?",
                answers: [
                    {
                        text: "Yes",
                        next: "circuit-overload-diagnosis"
                    },
                    {
                        text: "No",
                        next: "thermal-issue-diagnosis"
                    }
                ]
            },
            "short-circuit-diagnosis": {
                diagnosis: "Possible short circuit in wiring or connected device. This is a serious fire hazard. \n\nImmediate Actions: \n1. Leave the breaker OFF. \n2. Disconnect power to the affected circuit (e.g., turn off battery switch or shore power). \n3. Visually inspect wiring and connected devices for obvious damage, melting, or burning. \n\nDiagnostic Procedures: \n1. Use a multimeter in continuity mode (with power OFF) to test for shorts between positive and negative wires. \n2. If a device is suspected, disconnect it and re-test the circuit wiring. \n\nRepair Options: \n- This requires professional diagnosis and repair by a qualified marine electrician. Do not attempt to bypass the breaker or use the circuit until repaired. \n\nPreventative Maintenance: \n- Regularly inspect wiring for chafing or damage, especially in hidden areas. \n- Ensure proper strain relief on all connections to prevent wires pulling loose. \n- Use only marine-grade components (UL 1426 wire, marine breakers). \n- Maintain a clean bilge and engine room to prevent debris from damaging wires. \n\n⚠️ CONTACT MD MARINE ELECTRIC: This is a critical safety issue requiring professional assistance. \nCall: 253-383-9983 \nEmail: MainOffice@MDmarineElectric.com \nWebsite: MDmarineElectric.com",
                severity: "critical"
            },
            "faulty-breaker-diagnosis": {
                diagnosis: "Faulty circuit breaker or internal wiring issue within the panel. \n\nImmediate Actions: \n1. Leave the breaker OFF. \n\nDiagnostic Procedures: \n1. With power OFF, check breaker connections for tightness and corrosion. \n2. If connections are good, the breaker itself may be faulty (internal mechanism failure). \n3. A hidden wiring fault within the panel is also possible but less common. \n\nRepair Options: \n- Replace the circuit breaker with an identical marine-rated unit (e.g., Carling, Blue Sea Systems). \n- If the issue persists, consult a marine electrician to inspect panel wiring. \n\nPreventative Maintenance: \n- Exercise breakers periodically (turn on/off several times a year) to prevent sticking. \n- Keep electrical panels clean, dry, and free of corrosion. Apply dielectric grease to connections if appropriate for the environment. \n- Label breakers clearly.",
                severity: "warning"
            },
            "equipment-fault-diagnosis": {
                diagnosis: "Overload or fault in specific equipment connected to the circuit. \n\nImmediate Actions: \n1. Disconnect the suspect equipment. \n\nDiagnostic Procedures: \n1. Reset the breaker. If it holds with the equipment disconnected, the equipment is likely the issue. \n2. Check the equipment\u0027s power rating (label or manual) against the circuit breaker rating. \n3. Inspect the equipment\u0027s power cord and internal wiring for damage. \n4. Test the equipment on a different, appropriately rated circuit if possible. \n\nRepair Options: \n- Repair or replace the faulty equipment. \n- If the equipment\u0027s power draw is too high for the circuit, consider installing a dedicated circuit or upgrading the existing one (professional assessment required per ABYC E-11). \n\nPreventative Maintenance: \n- Ensure equipment is properly rated for marine use and environment. \n- Avoid overloading circuits; understand the power draw of your appliances. \n- Check cords and plugs regularly for damage or overheating.",
                severity: "warning"
            },
            "intermittent-wiring-diagnosis": {
                diagnosis: "Possible intermittent wiring fault (loose connection, chafed wire). \n\nImmediate Actions: \n1. Monitor the circuit closely. Avoid relying on it for critical systems if possible. \n\nDiagnostic Procedures: \n1. With power OFF, carefully inspect the entire wiring run for chafing, damage, or loose connections at terminals and junctions. Pay close attention to areas where wires pass through bulkheads or near moving parts. \n2. Gently wiggle wires while testing continuity (power OFF) to identify intermittent breaks or shorts. \n3. Check connections for corrosion (green or white powder). \n\nRepair Options: \n- Repair damaged sections of wire using marine-grade butt connectors and heat shrink tubing (ensure watertight seal). \n- Tighten loose connections securely (use lock washers where appropriate). \n- Clean corroded terminals with a wire brush and apply corrosion inhibitor. \n- Reroute wires away from sources of chafing or vibration if necessary, using appropriate clamps and chafe protection. \n\nPreventative Maintenance: \n- Secure wiring properly every 18 inches (ABYC E-11 standard). \n- Use chafe protection (grommets, loom) where wires pass through openings. \n- Perform regular visual inspections of wiring, especially in high-vibration areas.",
                severity: "warning"
            },
            "loose-connection-diagnosis": {
                diagnosis: "Possible loose connection or wire chafing exacerbated by vibration or movement. \n\nImmediate Actions: \n1. Monitor the circuit. \n\nDiagnostic Procedures: \n1. With power OFF, inspect all connections on the circuit for tightness. Pay attention to terminals at the breaker, devices, and any junction points. Use appropriate tools (screwdriver, wrench) to check tightness. \n2. Look for signs of arcing (black marks, pitting) at connections. \n3. Inspect wiring near moving parts or areas prone to vibration (engine room, near machinery) for chafing. \n\nRepair Options: \n- Tighten all connections securely. Follow torque specifications if available. \n- Clean any corroded terminals before tightening. \n- Repair chafed wiring sections using marine-grade methods. \n- Secure wiring to prevent movement and vibration stress. \n\nPreventative Maintenance: \n- Periodically check connection tightness (especially high-current circuits like windlass, starter, alternator) as part of routine maintenance. \n- Use lock washers or nyloc nuts on terminal studs to resist vibration loosening. \n- Ensure proper wire support near connections.",
                severity: "warning"
            },
            "circuit-overload-diagnosis": {
                diagnosis: "Circuit overload. The combined power draw of devices exceeds the circuit\u0027s capacity. \n\nImmediate Actions: \n1. Reduce the number of devices operating on the circuit. \n\nDiagnostic Procedures: \n1. Calculate the total amperage draw of all devices on the circuit. \n2. Compare to the circuit breaker rating. \n3. Use a clamp meter to measure actual current draw if available. \n\nRepair Options: \n- Redistribute loads to different circuits. \n- Install a higher-capacity circuit if appropriate (requires professional assessment). \n- Replace with a larger gauge wire if current wire size is inadequate for the load (professional installation required). \n\nPreventative Maintenance: \n- Document the power requirements of all onboard equipment. \n- Create a load management plan to avoid overloading circuits. \n- Consider installing a load monitor system for critical circuits. \n- When adding new equipment, verify circuit capacity first.",
                severity: "normal"
            },
            "thermal-issue-diagnosis": {
                diagnosis: "Possible thermal issue causing breaker to trip after warming up. \n\nImmediate Actions: \n1. Allow the circuit to cool before resetting. \n\nDiagnostic Procedures: \n1. Check for heat buildup around the breaker panel or along the circuit path. \n2. Look for signs of overheating (discoloration, melting, burning smell). \n3. Verify that the breaker is properly rated for the environment and application. \n\nRepair Options: \n- Improve ventilation around the breaker panel if heat buildup is an issue. \n- Replace the breaker if it appears to be tripping at too low a temperature. \n- Consider upgrading wire gauge if wire resistance is causing heating. \n\nPreventative Maintenance: \n- Ensure proper ventilation around electrical panels. \n- Keep connections clean and tight to prevent resistance heating. \n- Use appropriate wire gauge for the circuit length and load. \n- Consider thermal imaging inspection of electrical panels during routine maintenance.",
                severity: "warning"
            }
        },
        "complete-power-loss": {
            start: {
                question: "Is the power loss affecting the entire vessel or just certain systems?",
                answers: [
                    {
                        text: "Entire vessel",
                        next: "entire-vessel"
                    },
                    {
                        text: "Only certain systems",
                        next: "certain-systems"
                    }
                ]
            },
            "entire-vessel": {
                question: "Are you connected to shore power?",
                answers: [
                    {
                        text: "Yes",
                        next: "shore-power-check"
                    },
                    {
                        text: "No (on battery power)",
                        next: "battery-power-check"
                    }
                ]
            },
            "shore-power-check": {
                question: "Is the shore power cord securely connected at both ends?",
                answers: [
                    {
                        text: "Yes",
                        next: "shore-breaker-check"
                    },
                    {
                        text: "No or unsure",
                        next: "shore-connection-diagnosis"
                    }
                ]
            },
            "shore-breaker-check": {
                question: "Is the shore power breaker (on dock) and main AC breaker (on vessel) on?",
                answers: [
                    {
                        text: "Yes, both are on",
                        next: "shore-voltage-check"
                    },
                    {
                        text: "No or unsure",
                        next: "shore-breaker-diagnosis"
                    }
                ]
            },
            "shore-voltage-check": {
                question: "Do you have a multimeter to check shore power voltage?",
                answers: [
                    {
                        text: "Yes",
                        next: "shore-voltage-diagnosis"
                    },
                    {
                        text: "No",
                        next: "galvanic-isolator-check"
                    }
                ]
            },
            "galvanic-isolator-check": {
                question: "Does your vessel have a galvanic isolator or isolation transformer?",
                answers: [
                    {
                        text: "Yes",
                        next: "isolator-diagnosis"
                    },
                    {
                        text: "No or unsure",
                        next: "shore-power-system-diagnosis"
                    }
                ]
            },
            "battery-power-check": {
                question: "Is the battery switch in the ON position?",
                answers: [
                    {
                        text: "Yes",
                        next: "battery-voltage-check"
                    },
                    {
                        text: "No or unsure",
                        next: "battery-switch-diagnosis"
                    }
                ]
            },
            "battery-voltage-check": {
                question: "Do you have a multimeter to check battery voltage?",
                answers: [
                    {
                        text: "Yes",
                        next: "battery-voltage-diagnosis"
                    },
                    {
                        text: "No",
                        next: "battery-connection-check"
                    }
                ]
            },
            "battery-connection-check": {
                question: "Are the battery terminals clean and connections tight?",
                answers: [
                    {
                        text: "Yes",
                        next: "main-fuse-check"
                    },
                    {
                        text: "No or unsure",
                        next: "battery-connection-diagnosis"
                    }
                ]
            },
            "main-fuse-check": {
                question: "Have you checked the main fuse or circuit breaker from the battery?",
                answers: [
                    {
                        text: "Yes, it's good",
                        next: "battery-system-diagnosis"
                    },
                    {
                        text: "No or it's blown/tripped",
                        next: "main-fuse-diagnosis"
                    }
                ]
            },
            "certain-systems": {
                question: "Which systems are affected by the power loss?",
                answers: [
                    {
                        text: "DC systems (lights, pumps, electronics)",
                        next: "dc-system-check"
                    },
                    {
                        text: "AC systems (outlets, air conditioning, etc.)",
                        next: "ac-system-check"
                    }
                ]
            },
            "dc-system-check": {
                question: "Have you checked the circuit breakers or fuses for the affected systems?",
                answers: [
                    {
                        text: "Yes, they're all on/good",
                        next: "dc-distribution-diagnosis"
                    },
                    {
                        text: "No or found tripped/blown ones",
                        next: "dc-breaker-diagnosis"
                    }
                ]
            },
            "ac-system-check": {
                question: "Have you checked the AC panel breakers for the affected systems?",
                answers: [
                    {
                        text: "Yes, they're all on",
                        next: "ac-distribution-diagnosis"
                    },
                    {
                        text: "No or found tripped ones",
                        next: "ac-breaker-diagnosis"
                    }
                ]
            },
            "shore-connection-diagnosis": {
                diagnosis: "Shore power connection issue. \n\nImmediate Actions: \n1. Ensure the shore power cord is securely connected at both the dock pedestal and vessel inlet. \n2. Check for visible damage to the cord, plug, or inlet. \n3. Verify the dock pedestal is providing power (check other outlets or ask marina staff). \n\nDiagnostic Procedures: \n1. Inspect the shore power cord for cuts, abrasions, or burn marks. \n2. Check the plug and inlet for corrosion, bent/broken pins, or signs of overheating. \n3. If available, test the shore power cord with a circuit tester or multimeter. \n\nRepair Options: \n- Clean corroded connections with electrical contact cleaner. \n- Replace damaged shore power cord with a marine-grade cord of appropriate amperage rating. \n- If inlet is damaged, have it replaced by a qualified marine electrician. \n\nPreventative Maintenance: \n- Regularly inspect shore power cords and connections for damage or corrosion. \n- Use waterproof covers on shore inlets when not in use. \n- Coil and store shore power cords properly to prevent damage. \n- Consider using a cord strain relief to prevent stress on the connections. \n- Replace shore power cords every 5-7 years or sooner if showing signs of wear.",
                severity: "normal"
            },
            "shore-breaker-diagnosis": {
                diagnosis: "Shore power breaker issue. \n\nImmediate Actions: \n1. Check and reset the shore power breaker at the dock pedestal. \n2. Check and reset the main AC breaker on your vessel's electrical panel. \n\nDiagnostic Procedures: \n1. If breakers immediately trip again when reset, there may be a short circuit or overload in your AC system. \n2. If the dock breaker trips but vessel breaker doesn't, the issue may be with the shore power cord or inlet. \n3. If both stay on but you still have no power, check additional breakers or switches in the system. \n\nRepair Options: \n- If breakers continue to trip, disconnect all AC loads and reconnect them one by one to identify the problematic circuit or device. \n- If the breaker itself appears faulty, have it replaced by a qualified marine electrician. \n\nPreventative Maintenance: \n- Exercise breakers periodically by turning them off and on to prevent sticking. \n- Keep electrical panels clean and dry. \n- Monitor total power consumption to avoid overloading the shore power connection. \n- Consider installing a power management system for larger vessels with multiple high-draw appliances.",
                severity: "normal"
            },
            "shore-voltage-diagnosis": {
                diagnosis: "Shore power voltage issue. \n\nImmediate Actions: \n1. Use a multimeter to check voltage at the shore power inlet (should be 105-125V for 120V systems or 210-250V for 240V systems). \n2. If voltage is outside these ranges, disconnect from shore power to protect your equipment. \n\nDiagnostic Procedures: \n1. Check voltage at the dock pedestal outlet. \n2. If dock voltage is good but vessel inlet voltage is low, check the shore power cord and connections. \n3. If dock voltage is out of range, report to marina management. \n\nRepair Options: \n- If the issue is with the dock power, use a different pedestal if available. \n- If the issue is with your shore power cord, replace it. \n- Consider installing a voltage monitor or protector to automatically disconnect when voltage is out of safe range. \n\nPreventative Maintenance: \n- Periodically check shore power voltage, especially when experiencing electrical issues. \n- Consider installing a permanent AC voltmeter on your electrical panel. \n- Use a shore power cord appropriate for your vessel's amperage requirements. \n- Consider a galvanic isolator or isolation transformer for additional protection.",
                severity: "warning"
            },
            "isolator-diagnosis": {
                diagnosis: "Possible galvanic isolator or isolation transformer failure. \n\nImmediate Actions: \n1. If you suspect a failed isolator or transformer, consider disconnecting from shore power until it can be inspected. \n\nDiagnostic Procedures: \n1. Visually inspect the galvanic isolator or isolation transformer for signs of damage or overheating. \n2. For galvanic isolators, a qualified technician can test diode functionality. \n3. For isolation transformers, check for unusual noise, vibration, or overheating. \n\nRepair Options: \n- Failed galvanic isolators should be replaced, not repaired. \n- Isolation transformers may be repairable by a qualified technician, but replacement is often recommended. \n- Always replace with a device that meets ABYC A-28 standards. \n\nPreventative Maintenance: \n- Have galvanic isolators tested annually as part of electrical system maintenance. \n- Keep isolation transformers clean and well-ventilated. \n- Consider upgrading to newer isolator technology with status indicators if you have an older unit. \n- Document the installation date and maintain service records.",
                severity: "warning"
            },
            "shore-power-system-diagnosis": {
                diagnosis: "General shore power system issue. \n\nImmediate Actions: \n1. Disconnect from shore power if you suspect a serious electrical fault. \n\nDiagnostic Procedures: \n1. Systematically check each component of the shore power system: \n   - Shore power cord and connections \n   - Main AC breaker and distribution panel \n   - Reverse polarity indicator (if equipped) \n   - Individual circuit breakers \n2. Look for signs of overheating, corrosion, or damage. \n\nRepair Options: \n- Replace any damaged components with marine-rated equivalents. \n- Consider having a complete electrical system survey by a qualified marine electrician. \n- Update older AC systems to current ABYC standards if needed. \n\nPreventative Maintenance: \n- Schedule annual inspections of the entire AC electrical system. \n- Test GFCI/ELCI protection devices monthly using their test buttons. \n- Keep detailed records of electrical system components and installation dates. \n- Consider installing shore power protection devices (voltage monitor, galvanic isolator, etc.) if not already equipped. \n\n⚠️ CONTACT MD MARINE ELECTRIC: For complete AC system diagnosis and repair. \nCall: 253-383-9983 \nEmail: MainOffice@MDmarineElectric.com \nWebsite: MDmarineElectric.com",
                severity: "warning"
            },
            "battery-switch-diagnosis": {
                diagnosis: "Battery switch issue. \n\nImmediate Actions: \n1. Check the position of all battery switches. They should be in the ON, 1, 2, or BOTH position (depending on your system configuration). \n\nDiagnostic Procedures: \n1. Verify that battery switches are making proper contact when turned on (listen for a click). \n2. Inspect battery switch terminals for corrosion or loose connections. \n3. If multiple battery banks, try different switch positions to isolate the issue. \n\nRepair Options: \n- Clean corroded terminals with a wire brush and apply corrosion inhibitor. \n- Tighten loose connections (be careful not to overtighten and crack the switch base). \n- If the switch is damaged or not functioning properly, replace it with a marine-rated battery switch of appropriate amperage. \n\nPreventative Maintenance: \n- Operate battery switches regularly to prevent internal corrosion. \n- Keep switch terminals clean and protected with corrosion inhibitor. \n- Ensure switch mounting area stays dry. \n- Label switch positions clearly for proper operation. \n- Consider upgrading to a switch with a higher amperage rating if you've added electrical equipment.",
                severity: "normal"
            },
            "battery-voltage-diagnosis": {
                diagnosis: "Battery voltage issue. \n\nImmediate Actions: \n1. Use a multimeter to check battery voltage. A fully charged 12V battery should read 12.6-12.8V at rest. \n2. If voltage is below 12.0V, the battery is significantly discharged. \n\nDiagnostic Procedures: \n1. Check voltage with engine off, then running (should increase to 13.2-14.4V with engine running). \n2. If voltage doesn't increase with engine running, the charging system may be faulty. \n3. If voltage is very low (below 10.5V), the battery may be damaged. \n\nRepair Options: \n- Charge the battery using an appropriate marine battery charger. \n- If battery won't hold a charge, replace it with a marine-grade battery of appropriate type and capacity. \n- If charging system is faulty, check alternator, regulator, and charging circuit. \n\nPreventative Maintenance: \n- Monitor battery voltage regularly with a voltmeter or battery monitor. \n- Keep batteries properly charged (avoid deep discharge). \n- Maintain electrolyte levels in flooded batteries. \n- Clean battery terminals regularly and protect with anti-corrosion spray. \n- Consider installing an automated charging system for vessels left unattended. \n- Replace batteries proactively every 3-5 years depending on type and usage.",
                severity: "normal"
            },
            "battery-connection-diagnosis": {
                diagnosis: "Battery connection issue. \n\nImmediate Actions: \n1. Inspect battery terminals and connections for corrosion, looseness, or damage. \n\nDiagnostic Procedures: \n1. Check all connections in the battery circuit: battery terminals, cables, main switch, and ground connections. \n2. Look for white or green corrosion, loose fasteners, or damaged cables. \n3. Verify that battery cables are the correct gauge for your system. \n\nRepair Options: \n- Clean corroded terminals with a baking soda solution and wire brush. \n- Tighten loose connections to proper torque specifications. \n- Replace damaged cables with marine-grade battery cables of appropriate gauge. \n- Apply dielectric grease or battery terminal protectant after cleaning. \n\nPreventative Maintenance: \n- Inspect battery connections monthly during the boating season. \n- Keep battery compartments clean, dry, and well-ventilated. \n- Use battery terminal covers to prevent accidental shorts. \n- Ensure batteries are secured properly to prevent movement. \n- Consider upgrading to tinned marine cable and high-quality terminals for better corrosion resistance.",
                severity: "normal"
            },
            "main-fuse-diagnosis": {
                diagnosis: "Main fuse or circuit breaker issue. \n\nImmediate Actions: \n1. Locate and inspect the main fuse or circuit breaker (often near the battery or battery switch). \n\nDiagnostic Procedures: \n1. If the fuse is blown or breaker is tripped, do NOT immediately replace or reset without investigating the cause. \n2. Check for shorts in the main power distribution system. \n3. Disconnect all major loads and check for resistance to ground. \n\nRepair Options: \n- Replace blown fuses with the same type and amperage rating. \n- If a breaker has failed, replace it with a marine-rated equivalent. \n- If fuses or breakers continue to blow/trip, consult a marine electrician to identify the underlying cause. \n\nPreventative Maintenance: \n- Carry spare fuses of appropriate ratings. \n- Periodically inspect fuse holders for corrosion or heat damage. \n- Ensure fuse or breaker amperage ratings match the wire gauge in the circuit. \n- Consider upgrading to ANL or MRBF type fuses with high vibration resistance for main battery protection. \n- Document the location and specifications of all fuses and breakers on board.",
                severity: "warning"
            },
            "battery-system-diagnosis": {
                diagnosis: "General battery system issue. \n\nImmediate Actions: \n1. Perform a systematic check of the entire DC electrical system. \n\nDiagnostic Procedures: \n1. Verify battery health (voltage, physical condition, age). \n2. Check all connections from batteries to distribution panel. \n3. Inspect the battery switch, main fuse/breaker, and ground connections. \n4. Look for signs of overheating, corrosion, or damage throughout the system. \n\nRepair Options: \n- Address any specific issues found during diagnosis. \n- Consider a complete system evaluation by a marine electrician if unable to identify the cause. \n- Update older DC systems to current ABYC standards if needed. \n\nPreventative Maintenance: \n- Implement a regular battery maintenance schedule (cleaning, testing, watering if applicable). \n- Install a battery monitor system to track battery health and usage. \n- Keep detailed records of battery installation dates and maintenance. \n- Ensure proper ventilation in battery compartments. \n- Consider upgrading to AGM or lithium batteries for improved reliability if appropriate for your vessel. \n\n⚠️ CONTACT MD MARINE ELECTRIC: For complete DC system diagnosis and repair. \nCall: 253-383-9983 \nEmail: MainOffice@MDmarineElectric.com \nWebsite: MDmarineElectric.com",
                severity: "warning"
            },
            "dc-breaker-diagnosis": {
                diagnosis: "DC circuit breaker or fuse issue. \n\nImmediate Actions: \n1. Identify which circuit breakers or fuses are tripped/blown. \n2. Do NOT reset breakers or replace fuses until investigating the cause. \n\nDiagnostic Procedures: \n1. Check the affected circuit for shorts or overloads. \n2. Disconnect equipment on the affected circuit. \n3. Look for damaged wiring, water intrusion, or other obvious issues. \n\nRepair Options: \n- Replace blown fuses with the same type and amperage rating. \n- Reset circuit breakers after addressing the underlying cause. \n- Repair any damaged wiring using marine-grade wire and connections. \n- If breakers or fuses continue to trip/blow, consult a marine electrician. \n\nPreventative Maintenance: \n- Carry spare fuses of all ratings used on board. \n- Periodically exercise circuit breakers to prevent sticking. \n- Keep electrical panels clean and dry. \n- Label all circuits clearly for quick identification. \n- Consider upgrading to hydraulic-magnetic breakers for improved reliability in marine environments.",
                severity: "normal"
            },
            "dc-distribution-diagnosis": {
                diagnosis: "DC distribution system issue. \n\nImmediate Actions: \n1. Systematically trace the power flow from batteries to affected equipment. \n\nDiagnostic Procedures: \n1. Check for voltage at various points in the system to isolate where power is lost. \n2. Inspect bus bars, terminal blocks, and distribution panels for loose connections or corrosion. \n3. Look for hidden junction boxes or splices that might have failed. \n4. Test for voltage drops across connections (should be minimal). \n\nRepair Options: \n- Clean and tighten all connections in the distribution system. \n- Replace corroded terminals, bus bars, or distribution blocks. \n- Repair or replace damaged wiring. \n- Consider upgrading to a more robust distribution system if current one is inadequate. \n\nPreventative Maintenance: \n- Periodically inspect all accessible connections in the DC system. \n- Keep distribution panels and connection points clean and dry. \n- Use corrosion inhibitor on electrical connections. \n- Create and maintain an electrical system diagram showing all distribution points. \n- Consider thermal imaging inspection to identify hot spots before they fail.",
                severity: "warning"
            },
            "ac-breaker-diagnosis": {
                diagnosis: "AC circuit breaker issue. \n\nImmediate Actions: \n1. Identify which circuit breakers are tripped. \n2. Do NOT reset breakers until investigating the cause. \n\nDiagnostic Procedures: \n1. Disconnect all equipment on the affected circuit. \n2. Check for signs of water intrusion, damaged wiring, or overloaded circuits. \n3. If GFCI or ELCI breakers are tripped, there may be a ground fault in the system. \n\nRepair Options: \n- Reset circuit breakers after addressing the underlying cause. \n- Repair any damaged wiring using marine-grade wire and connections. \n- Replace faulty equipment that may be causing shorts or ground faults. \n- If breakers continue to trip, consult a marine electrician. \n\nPreventative Maintenance: \n- Test GFCI/ELCI protection devices monthly using their test buttons. \n- Keep electrical panels clean and dry. \n- Periodically exercise circuit breakers to prevent sticking. \n- Label all circuits clearly for quick identification. \n- Consider upgrading older AC panels to include modern safety features like ELCI protection. \n\n⚠️ CONTACT MD MARINE ELECTRIC: For persistent AC system issues or if you suspect a serious electrical fault. \nCall: 253-383-9983 \nEmail: MainOffice@MDmarineElectric.com \nWebsite: MDmarineElectric.com",
                severity: "warning"
            },
            "ac-distribution-diagnosis": {
                diagnosis: "AC distribution system issue. \n\nImmediate Actions: \n1. If you suspect a serious electrical fault, disconnect from shore power. \n\nDiagnostic Procedures: \n1. Check for voltage at various points in the system to isolate where power is lost. \n2. Inspect transfer switches, isolation transformers, and inverters if installed. \n3. Look for signs of overheating or damage at connection points. \n4. Verify proper operation of voltage indicators on the AC panel. \n\nRepair Options: \n- Clean and tighten all connections in the AC distribution system. \n- Replace any damaged components with marine-rated equivalents. \n- Consider having a complete electrical system survey by a qualified marine electrician. \n- Update older AC systems to current ABYC standards if needed. \n\nPreventative Maintenance: \n- Schedule annual inspections of the entire AC electrical system. \n- Keep distribution panels and connection points clean and dry. \n- Test all safety devices regularly (GFCI outlets, ELCI breakers). \n- Maintain detailed documentation of the AC system including wiring diagrams. \n- Consider installing additional monitoring devices like voltmeters, ammeters, or power management systems. \n\n⚠️ CONTACT MD MARINE ELECTRIC: For complete AC system diagnosis and repair. \nCall: 253-383-9983 \nEmail: MainOffice@MDmarineElectric.com \nWebsite: MDmarineElectric.com",
                severity: "critical"
            }
        }
    }
};
