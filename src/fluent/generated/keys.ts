import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0': {
                        table: 'sys_script'
                        id: '173d392a0a2b49bc85bd5e27f932fb7d'
                    }
                    '1': {
                        table: 'sys_script'
                        id: '07d5793e724e434aa08260cf68a10b3b'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '03d189ffd2e3428db1ce97ad1c628554'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '735ffb01e3454bfd8e5076fe190dfc25'
                    }
                    src_server_osirAutoAssignment_js: {
                        table: 'sys_module'
                        id: 'f512d2305ead46f28a6f3908a3910138'
                    }
                    src_server_osirStateTransition_js: {
                        table: 'sys_module'
                        id: '5f3b18438ebe48f6b4b5b711bb162425'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '028baa57f0704ec5b691a07a7eda9d9d'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_location_detail'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0434696f33554052940a54ac52f5bff6'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'locate_cube'
                            value: 'center_c'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04c9f94d6994423e9bda58e13abe3526'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06aec86958f1450985f438d572316d90'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_request_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '079d01dd4d414ff9a287a350ae336034'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0833bcf4576b42c7a5e9358a157b35e0'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'assignment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '09f38f69f3e742d1a15faa95e8ab3f8e'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'machine_room'
                            value: 'room_201'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0cb2734e28b5451aadc28a22d3c83e4a'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                            value: 'meeting_room'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0e9de898c9e24bc4a6d0630549802b8a'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'machine_room'
                            value: 'room_102'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1146fb4556eb4a7bad78e74d2c6f813d'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '114f3861474103100da3a464116d43af'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1428ab6c3e014dac88b23b3ab2cf8518'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'machine_room'
                            value: 'room_101'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15016bb6fa3a483e95b78f80b5a119a0'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'location_type'
                            value: 'hardware'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '152c8c57967d47a5ac8fdfd36fc2ca9f'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'server'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '154f3861474103100da3a464116d43ac'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15c3ae72cd124cf1b79b1b0028b9aa0c'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '164d2b6723a6443c9175aa8ba98a6d14'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '194f3861474103100da3a464116d43a9'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'server'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d4f3861474103100da3a464116d43a6'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d4f3861474103100da3a464116d43b1'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24ca6b2ca84e42c589766e4ec11e2df1'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: '6'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2779300edcab4416b52bd913608a925b'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28119839682e49c2a906246988136fb7'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '294f3861474103100da3a464116d43b4'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a499a62bae641c5829cf38188ecf863'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'special_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2bb74145ae62460e9676f53879d70a18'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                            value: 'server_room'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ca1b1bcc6c24ae9b9de8cd81df4c934'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: 'pending_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30fbb8c70af14a36a6065b6f115e4660'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'assignment_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '315bf8ed4a2a4fe4a20afdda835f7cf1'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '367875931b8c41178ba1e2c392cb2070'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '385af5062ab141c0bda1cf3770ecdddf'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'requester'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a81e619c1864e62aa1bca1400e5e44b'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b0000c620fd48808552c746c71e7f08'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_location_detail'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4143b6dc20f141cca91f9bd73218472b'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '414ffc69470103100da3a464116d43d6'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46f0cf3225b44e379701522fc255f5b6'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '471dbdf7e7e74121b2b41d0ec4b4e929'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'special_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b6375bebfa744709841e79df3dba399'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'locate_cube'
                            value: 'center_a'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '514f3861474103100da3a464116d43b1'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_on_site_date'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '523d9245aeff442f98bdf259b418a350'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'locate_cube'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '532ab223d33c4a6bbdad3837cf06a340'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'machine_room'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '554f3861474103100da3a464116d43ae'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'special_notes'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '58991da7c075403e9fce27924a0467ab'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '594f3861474103100da3a464116d43ab'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c10442d6f8e47df8a7c71e4ba6718b1'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d2cdc0bf36b41598d6e9b8f7c5ff1f6'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5d4f3861474103100da3a464116d43a8'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61a41e0c0c354e47bbaa05e21d1bcc5a'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'machine_room'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '654217cdd9fa4a3fbc17d967e513f621'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65dfddb434154da4afc7d991e2e81361'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66218e9c0da44c34a49fe50f00d98ad8'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                            value: 'equipment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66d785146c434f51a7a5bbf001f525d8'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                            value: 'shared_area'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d4f3861474103100da3a464116d43b3'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location_type'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '786832812b9043a8b1d1760ff5b96a03'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'caller_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80fae294cdfa41fca409042b1a64cdee'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85788050ac5f4ffbaf33a7e79ad9a8e1'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'requested_on_site_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '86167f1571a54e86b1706995c4513220'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8666b3e21c0b40d3a7d92ec6b49e7d12'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                            value: 'not_requested'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '888d4ba7bfcd4c95869e6e6f12c3eab0'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8aab60ad700f4e96a8b8451b99d7a6f4'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'work_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8cec439df09842abbc666e32c7abe924'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '905333280d3447f8ae7def6beccfb6b1'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90d6c956834748f89839bde7870ec51c'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '914f3861474103100da3a464116d43a8'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'closed_at'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '914f3861474103100da3a464116d43b3'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'projector'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91b1bf312d304f62b76a8a6311046579'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92cbeb84c65b466b9fa6a00b844fa83f'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_request_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '948e501b47d44c1b8488b16cf052c9d8'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'locate_cube'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '954f3861474103100da3a464116d43b0'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '994f3861474103100da3a464116d43ad'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d4f3861474103100da3a464116d43aa'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0f860674cc641608f19cdad20d509cc'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a967782739bf4d669c0b1ef50350e3ad'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'machine_room'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a969878050864a4c883d8087c3bbd49a'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ac5a5c9c709a4bcea91f03cf207535f9'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'acfe6bb7a74e4d4db1eed81d3af7cc61'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'location_type'
                            value: 'software'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'ae228f3fed02401594462c64884fc57d'
                        deleted: true
                        key: {
                            category: 'x_276493_onincreq_on_site_incident_request'
                            prefix: 'ONSITEREQ'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4400b1b4bd4401e83ec91496001bb15'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4e8086dcc3f4b47ad4aff43b9b9c5b7'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b6407fe0776d4b8d8cfdba638337e0b8'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6572393cf9a47db98bdffd9f6db2b7a'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'closed_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba7667dcb4644705bc16e17d48bca08b'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'caller_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bac29eb2052d434d840cd8bda3d67922'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c00c98fb52c641e5a7f2feeded94b617'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2e0fe229936427f9d63d52d29468aff'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7537251545f49fbb181c4a7146d1870'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'projector'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c91ddcb9b4474701ba36de5b6362c08c'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca9db75d7305451987ae3149b2af9f96'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd0af84d7726646099f356c9b51ec06a1'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd141d4d7b0c749e295d6283e43a6edae'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd14f3861474103100da3a464116d43aa'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'machine_room'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd477eb0481c14367a83c02468c5718e7'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'server'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd54f3861474103100da3a464116d43a7'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd54f3861474103100da3a464116d43b2'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd57a5aec2fdc458bb25f71c459b93c57'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'locate_cube'
                            value: 'center_b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7ea01d80fa1416290b6267c69198b5b'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd94f3861474103100da3a464116d43a4'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd94f3861474103100da3a464116d43af'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'locate_cube'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9bfea7ff21143ab816b6f4737a1d7ee'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd4f3861474103100da3a464116d43ac'
                        key: {
                            sys_ui_section: {
                                id: '414ffc69470103100da3a464116d43d6'
                                key: {
                                    name: 'x_276493_onincreq_on_site_incident_request'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requester'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ded593db1c70445e9d14e6a835711a6b'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'def7fe3dc4954556838cbfa269004299'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'locate_cube'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e0abbe9092e54640ad20d575fd57bf65'
                        key: {
                            category: 'x_276493_onincreq_on_site_incident_request'
                            prefix: 'ONSITREQ'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e601259064384e44938e2ef239770ad1'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'projector'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e625dfec168348fe8a8363d31eb08aa6'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'location_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e6701c5ba1bc41c2bddee2ad27ab67a3'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e860c18fb60942e6831322bfbd46eef4'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e985ece4e99c4e4390d413ec79721bcf'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea86a0eb8c5b418b81495b643505ca80'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec96af3eddbf4986b83da6018cee6aec'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec9cda76cb0a4988b62a990c56fba061'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef9912ff44214f078da4a7db9a68a66c'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'u_facility_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efad468ae28b42dc86ec248b54542481'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f164b28a06cc415a991e09ee9e011565'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'closed_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1aeadb2ae784215bb4a9799f327c98d'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'requester'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa4ed925caaa4da1bfc716c5b59b3f1b'
                        deleted: true
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'requested_on_site_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fc628deb283a4631bce703688968a862'
                        key: {
                            name: 'x_276493_onincreq_on_site_incident_request'
                            element: 'state'
                            value: '1'
                        }
                    },
                ]
            }
        }
    }
}
