import {
  Table,
  StringColumn,
  DateTimeColumn,
  ReferenceColumn,
  ChoiceColumn,
  IntegerColumn,
  GenericColumn,
} from "@servicenow/sdk/core";

export const x_276493_onincreq_on_site_incident_request = Table({
  name: "x_276493_onincreq_on_site_incident_request",
  label: "On-Site Incident Request",
  allow_web_service_access: true,
  auto_number: {
    prefix: "ONSITREQ",
    number: 1,
    number_of_digits: 7,
  },
  schema: {
    number: StringColumn({
      label: "Number",
      maxLength: 40,
      read_only: true,
      default: "javascript:global.getNextObjNumberPadded();",
    }),
    caller_id: ReferenceColumn({
      label: "申請者",
      referenceTable: "sys_user",
      mandatory: true,
    }),
    u_request_date: DateTimeColumn({
      label: "申請日",
      mandatory: true,
    }),
    u_facility_type: ChoiceColumn({
      label: "設備種類",
      mandatory: true,
      dropdown: "dropdown_without_none",
      choices: {
        meeting_room: { label: "会議室", sequence: 0 },
        server_room: { label: "サーバー室", sequence: 1 },
        shared_area: { label: "共有エリア", sequence: 2 },
        equipment: { label: "共有機器", sequence: 3 },
        other: { label: "その他", sequence: 4 },
      },
    }),
    u_facility_id: StringColumn({
      label: "設備室番号",
      maxLength: 50,
    }),
    priority: IntegerColumn({
      label: "優先度",
      mandatory: true,
      dropdown: "dropdown_without_none",
      choices: {
        "1": { label: "緊急", sequence: 0 },
        "2": { label: "高", sequence: 1 },
        "3": { label: "中", sequence: 2 },
        "4": { label: "低", sequence: 3 },
      },
    }),
    state: IntegerColumn({
      label: "ステータス",
      mandatory: true,
      dropdown: "dropdown_without_none",
      choices: {
        "1": { label: "新規", sequence: 0 },
        "2": { label: "対応中", sequence: 1 },
        "3": { label: "承認待ち", sequence: 2 },
        "4": { label: "保留", sequence: 3 },
        "6": { label: "解決済み", sequence: 4 },
        "7": { label: "クローズ", sequence: 5 },
      },
    }),
    short_description: StringColumn({
      label: "問い合わせ件名",
      maxLength: 160,
      mandatory: true,
    }),
    description: GenericColumn({
      label: "詳細説明",
      columnType: "journal",
    }),
    u_location_detail: StringColumn({
      label: "発生場所詳細",
      maxLength: 200,
      mandatory: true,
    }),
    assigned_to: ReferenceColumn({
      label: "担当者",
      referenceTable: "sys_user",
    }),
    assignment_group: ReferenceColumn({
      label: "担当グループ",
      referenceTable: "sys_user_group",
    }),
    approval: ChoiceColumn({
      label: "承認ステータス",
      dropdown: "dropdown_with_none",
      choices: {
        not_requested: { label: "未申請", sequence: 0 },
        requested: { label: "申請中", sequence: 1 },
        approved: { label: "承認済み", sequence: 2 },
        rejected: { label: "却下", sequence: 3 },
      },
    }),
    resolved_at: DateTimeColumn({
      label: "解決日時",
    }),
  },
});
