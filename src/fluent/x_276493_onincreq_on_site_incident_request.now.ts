import {
  Table,
  StringColumn,
  DateColumn,
  DateTimeColumn,
  ReferenceColumn,
  ChoiceColumn,
  BooleanColumn,
  IntegerColumn,
  GenericColumn,
} from "@servicenow/sdk/core";

export const x_276493_onincreq_on_site_incident_request = Table({
  name: "x_276493_onincreq_on_site_incident_request",
  label: "On-Site Incident Request",
  allow_web_service_access: true,
  auto_number: {
    prefix: "ONSITEREQ",
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
    short_description: StringColumn({
      label: "概要",
      maxLength: 160,
      mandatory: true,
    }),
    requested_on_site_date: DateColumn({
      label: "予約日",
      mandatory: true,
    }),
    requester: ReferenceColumn({
      label: "申請者",
      referenceTable: "sys_user",
      mandatory: true,
    }),
    location_type: ChoiceColumn({
      label: "設備種類",
      mandatory: true,
      dropdown: "dropdown_without_none",
      choices: {
        hardware: { label: "ハードウェア", sequence: 0 },
        software: { label: "ソフトウェア", sequence: 1 },
      },
    }),
    locate_cube: ChoiceColumn({
      label: "Locate Cube",
      dropdown: "dropdown_with_none",
      choices: {
        center_a: { label: "Center_A", sequence: 0 },
        center_b: { label: "Center_B", sequence: 1 },
        center_c: { label: "Center_C", sequence: 2 },
      },
    }),
    machine_room: ChoiceColumn({
      label: "設備室",
      dropdown: "dropdown_with_none",
      choices: {
        room_101: { label: "設備室101", sequence: 0 },
        room_102: { label: "設備室102", sequence: 1 },
        room_201: { label: "設備室201", sequence: 2 },
      },
    }),
    server: BooleanColumn({
      label: "サーバー",
      default: false,
    }),
    projector: BooleanColumn({
      label: "プロジェクター",
      default: false,
    }),
    special_notes: StringColumn({
      label: "特記事項",
      maxLength: 4000,
    }),
    state: ChoiceColumn({
      label: "ステータス",
      mandatory: true,
      default: "draft",
      dropdown: "dropdown_without_none",
      choices: {
        draft: { label: "下書き", sequence: 0 },
        submitted: { label: "提出済み", sequence: 1 },
        pending_approval: { label: "承認待ち", sequence: 2 },
        in_progress: { label: "処理中", sequence: 3 },
        completed: { label: "完了", sequence: 4 },
        cancelled: { label: "キャンセル", sequence: 5 },
      },
    }),
    assigned_to: ReferenceColumn({
      label: "担当者",
      referenceTable: "sys_user",
    }),
    assignment_group: ReferenceColumn({
      label: "担当グループ",
      referenceTable: "sys_user_group",
    }),
    priority: IntegerColumn({
      label: "優先度",
      mandatory: true,
      default: "2",
      dropdown: "dropdown_without_none",
      choices: {
        "1": { label: "Low", sequence: 0 },
        "2": { label: "Medium", sequence: 1 },
        "3": { label: "High", sequence: 2 },
        "4": { label: "Critical", sequence: 3 },
      },
    }),
    work_notes: GenericColumn({
      label: "作業メモ",
      columnType: "journal",
    }),
    closed_at: DateTimeColumn({
      label: "完了日時",
    }),
  },
});
