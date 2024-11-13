/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AmazonRedShift from "@/assets/data-automation/moving-cards/AmazonRedShift.svg";
import ApacheCassandra from "@/assets/data-automation/moving-cards/ApacheCassandra.svg";
import AzureTable from "@/assets/data-automation/moving-cards/AzureTableStore.svg";
import MicrosoftSql from "@/assets/data-automation/moving-cards/MicrosoftSQL.svg";
import Mondrian from "@/assets/data-automation/moving-cards/Mondrian.svg";
import MongoDB from "@/assets/data-automation/moving-cards/MongoDB.svg";
import MySql from "@/assets/data-automation/moving-cards/MySQL.svg";
import Oracle from "@/assets/data-automation/moving-cards/Oracle.svg";
import Percona from "@/assets/data-automation/moving-cards/Percona.svg";
import Postgres from "@/assets/data-automation/moving-cards/Postgres.svg";
import SQLite from "@/assets/data-automation/moving-cards/SQLite.svg";
import S3 from "@/assets/workflow-slider/amazon-s3.svg";
import ClickHouse from "@/assets/workflow-slider/connection-images/ClickHouse.png";
import Databricks from "@/assets/workflow-slider/connection-images/Databricks.svg";
import GoogleAnalytics from "@/assets/workflow-slider/connection-images/GoogleAnalytics.png";
import GoogleDrive from "@/assets/workflow-slider/connection-images/GoogleDrive.png";
import GoogleForm from "@/assets/workflow-slider/connection-images/GoogleForm.png";
import GoogleSheets from "@/assets/workflow-slider/connection-images/GoogleSheets.png";
import GoogleTranslate from "@/assets/workflow-slider/connection-images/GoogleTranslate.png";
import Jira from "@/assets/workflow-slider/connection-images/Jira.png";
import Linkedin from "@/assets/workflow-slider/connection-images/LinkedIn.png";
import Mailgun from "@/assets/workflow-slider/connection-images/Mailgun.png";
import MariaDB from "@/assets/workflow-slider/connection-images/MariaDB.svg";
import MicrosoftDynamics from "@/assets/workflow-slider/connection-images/MicrosoftDynamics.svg";
import MicrosoftTeams from "@/assets/workflow-slider/connection-images/MicrosoftTeams.png";
import Salesforce from "@/assets/workflow-slider/connection-images/Salesforce.png";
import Shopify from "@/assets/workflow-slider/connection-images/Shopify.png";
import Slack from "@/assets/workflow-slider/connection-images/Slack.png";
import Csv from "@/assets/workflow-slider/csv-file.svg";
import Dropbox from "@/assets/workflow-slider/dropbox.svg";
import Excel from "@/assets/workflow-slider/excel-file.svg";
import Graphql from "@/assets/workflow-slider/graphql.png";
import JSONFile from "@/assets/workflow-slider/json-file.svg";
import Odata from "@/assets/workflow-slider/odata.svg";
import Parquet from "@/assets/workflow-slider/parquet.png";
import WhatIf from "@/assets/workflow-slider/task-images//what-if.svg";
import Azure from "@/assets/workflow-slider/task-images/AzureStorage.svg";
import Barcode from "@/assets/workflow-slider/task-images/barcode.svg";
import Braintree from "@/assets/workflow-slider/task-images/BrainTree.svg";
import CleanCache from "@/assets/workflow-slider/task-images/clean-cache.svg";
import CopyColumn from "@/assets/workflow-slider/task-images/copy-column.svg";
import DataTransform from "@/assets/workflow-slider/task-images/data-transform.svg";
import dataUpload from "@/assets/workflow-slider/task-images/data-upload.svg";
import Decrypt from "@/assets/workflow-slider/task-images/decrypt.svg";
import DropColumn from "@/assets/workflow-slider/task-images/drop-column.svg";
import Etl from "@/assets/workflow-slider/task-images/etl.svg";
import ExcelMerge from "@/assets/workflow-slider/task-images/excel-merge.svg";
import FeaturizeText from "@/assets/workflow-slider/task-images/featurize-text.svg";
import UpdateFile from "@/assets/workflow-slider/task-images/FileUpdate.svg";
import ftp from "@/assets/workflow-slider/task-images/ftp.svg";
import Genesys from "@/assets/workflow-slider/task-images/genesys.svg";
import Hash from "@/assets/workflow-slider/task-images/hash.svg";
import ExtractHTML from "@/assets/workflow-slider/task-images/html.svg";
import MachineLearning from "@/assets/workflow-slider/task-images/MachineLearning.svg";
import MailDownload from "@/assets/workflow-slider/task-images/mail-download.svg";
import MailMove from "@/assets/workflow-slider/task-images/mail-move.svg";
import MapKeyToBinary from "@/assets/workflow-slider/task-images/map-key-to-binary.svg";
import MapKeyToVector from "@/assets/workflow-slider/task-images/map-key-to-vector.svg";
import Nodejs from "@/assets/workflow-slider/task-images/node-js.svg";
import NormalizeMeanVariance from "@/assets/workflow-slider/task-images/normalize-mean-variance.svg";
import NormalizeRobustScaling from "@/assets/workflow-slider/task-images/normalize-robust-scaling.svg";
import SendNotification from "@/assets/workflow-slider/task-images/notification.svg";
import PdfSplit from "@/assets/workflow-slider/task-images/pdf-split.svg";
import Pdf from "@/assets/workflow-slider/task-images/pdf.svg";
import ProjectPrincipals from "@/assets/workflow-slider/task-images/project-principals.svg";
import QueryExecution from "@/assets/workflow-slider/task-images/query-execution.svg";
import RemoveWords from "@/assets/workflow-slider/task-images/remove-words.svg";
import FileRename from "@/assets/workflow-slider/task-images/rename.svg";
import scipyr from "@/assets/workflow-slider/task-images/scipyr.svg";
import SendEmail from "@/assets/workflow-slider/task-images/send-email.svg";
import Report from "@/assets/workflow-slider/task-images/send-report.svg";
import Target from "@/assets/workflow-slider/task-images/target.svg";
import TokenizeIntoWords from "@/assets/workflow-slider/task-images/tokenize-into-words.svg";
import updateDatasource from "@/assets/workflow-slider/task-images/update-database.svg";
import WebRPA from "@/assets/workflow-slider/task-images/web-application.svg";
import ZipFile from "@/assets/workflow-slider/task-images/zip-file.svg";

import { cn } from "@/lib/utils";

type sliderCardContent = {
  image: StaticImageData;
  name: string;
  className?: string;
};

interface Item {
  desc: string;
  buttonIcon?: StaticImageData;
}

const applications: sliderCardContent[] = [
  { image: Braintree, name: "Braintree" },
  { image: Genesys, name: "Genesys" },
  { image: Jira, name: "Jira" },
  { image: Linkedin, name: "Linkedin" },
  { image: Mailgun, name: "Mailgun" },
  { image: Salesforce, name: "Salesforce", className: "h-14 w-20" },
  { image: Shopify, name: "Shopify" },
  { image: Graphql, name: "Graphql" },
  { image: MicrosoftTeams, name: "Microsoft Teams" },
  { image: Slack, name: "Slack" },
  { image: GoogleAnalytics, name: "Google Analytics", className: "w-20 h-14" },
  { image: GoogleDrive, name: "Google drive", className: "w-16 h-14" },
  { image: Dropbox, name: "Dropbox" },
  { image: MicrosoftDynamics, name: "D365 FO" },
  { image: Odata, name: "Odata" },
  { image: WebRPA, name: "Web Automation" },
];

const databases: sliderCardContent[] = [
  { image: Oracle, name: "Oracle" },
  { image: SQLite, name: "SQLite" },
  { image: MySql, name: "MySQL" },
  { image: MicrosoftSql, name: "Microsoft Sql" },
  { image: Postgres, name: "Postgres" },
  { image: ApacheCassandra, name: "Cassandra" },
  { image: MariaDB, name: "MariaDB" },
  { image: Mondrian, name: "Mondrian" },
  { image: MongoDB, name: "MongoDB" },
  { image: AzureTable, name: "Azure Table" },
  { image: ClickHouse, name: "ClickHouse" },
  { image: Databricks, name: "Databricks" },
  { image: AmazonRedShift, name: "Amazon Redshift" },
  { image: Percona, name: "Percona" },
];

const files: sliderCardContent[] = [
  { image: Csv, name: "CSV Files" },
  { image: Excel, name: "Excel Files" },
  { image: JSONFile, name: "JSON Files" },
  { image: ExtractHTML, name: "HTML" },
  { image: Parquet, name: "Parquet", className: "w-[88px] h-14" },
  { image: Pdf, name: "Pdf " },
  { image: Decrypt, name: "PGP" },
  { image: UpdateFile, name: "Update Files" },
  { image: ZipFile, name: "Zip/Unzip" },
  { image: Barcode, name: "Read Barcode" },
  { image: Report, name: "Reports" },
  { image: ExcelMerge, name: "Excel Merge" },
  { image: FileRename, name: "File Rename" },
  { image: scipyr, name: "SciPyR" },
  { image: S3, name: "S3" },
  { image: Azure, name: "Azure" },
  { image: GoogleSheets, name: "Google Sheets" },
  { image: GoogleTranslate, name: "Google Translate" },
  { image: GoogleForm, name: "Google Form" },
  { image: ftp, name: "Ftp" },
  { image: UpdateFile, name: "Write to File" },
  { image: PdfSplit, name: "Split Pdf" },
];

const transformations: sliderCardContent[] = [
  { image: QueryExecution, name: "Execute Query" },
  { image: Target, name: "Target & Threshold" },
  { image: updateDatasource, name: "Update Datasource" },
  { image: MachineLearning, name: "Execute ML Model" },
  { image: WhatIf, name: "Execute what-If Analysis" },
  { image: DataTransform, name: "Transform using javascript" },
  { image: SendEmail, name: "Send Email" },
  { image: CleanCache, name: "Clean Cache" },
  { image: Excel, name: "Encrypt/Decrypt Columns" },
  { image: DropColumn, name: "Drop Columns" },
  { image: CopyColumn, name: "Copy Columns" },
  { image: dataUpload, name: "Data Upload" },
  { image: MailMove, name: "Mail Move" },
  { image: MailDownload, name: "Mail Download" },
  { image: Etl, name: "Talend/SSIS" },
  { image: SendNotification, name: "Send Notification" },
  { image: MapKeyToVector, name: "Map Key To Vector" },
  { image: MapKeyToBinary, name: "Map Key To Binary Vector" },
  { image: RemoveWords, name: "Remove Stopwords" },
  { image: TokenizeIntoWords, name: "Tokenize into Words" },
  { image: NormalizeMeanVariance, name: "Normalize Mean Variance" },
  { image: Hash, name: "Hash" },
  { image: FeaturizeText, name: "Featurize Text" },
  { image: NormalizeRobustScaling, name: "Normalize Robust Scaling" },
  { image: ProjectPrincipals, name: "Project to Principal" },
];

const WorkflowSlider = React.memo(({ items }: { items: Item[] }) => {
  const duration = 5000; // Overall duration for slider to auto-change
  const splitDuration = duration / 2; // 3000 ms for each half
  const [active, setActive] = useState<number>(0);
  const [isShowingFirstHalf, setIsShowingFirstHalf] = useState<boolean>(true); // To track if showing first or second half
  const sliderTimerRef = useRef<NodeJS.Timeout | null>(null);
  const splitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isAutoplayStopped, setAutoplayStopped] = useState<boolean>(false);

  // Start interval to update active group every 5000ms
  const startAutoPlay = useCallback(() => {
    if (sliderTimerRef.current) clearInterval(sliderTimerRef.current);

    sliderTimerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, duration);
  }, [items.length]);

  // Start interval to toggle between first and second halves every 2500ms
  const startSplitToggle = useCallback(() => {
    if (splitTimerRef.current) clearInterval(splitTimerRef.current);

    splitTimerRef.current = setInterval(() => {
      setIsShowingFirstHalf((prev) => !prev); // Toggle between first and second half
    }, splitDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAutoplayStopped) {
      startAutoPlay();
    }
    startSplitToggle(); // Keep split toggle running even when autoplay stops
    return () => {
      if (sliderTimerRef.current) {
        clearInterval(sliderTimerRef.current);
      }
      if (splitTimerRef.current) {
        clearInterval(splitTimerRef.current);
      }
    };
  }, [startAutoPlay, startSplitToggle, isAutoplayStopped]);

  const handleButtonClick = useCallback(
    (index: number) => {
      setActive(index);
      setIsShowingFirstHalf(true); // Always show the first 16 items when manually clicked

      if (splitTimerRef.current) {
        clearInterval(splitTimerRef.current); // Reset the split timer on click -  the first half for 2500ms
      }

      if (sliderTimerRef.current) {
        clearInterval(sliderTimerRef.current); // Stop main 5000ms autoplay on button click
        setAutoplayStopped(true); // Set autoplay as stopped
      }

      // After the splitDuration, resume the regular split toggle
      splitTimerRef.current = setTimeout(() => {
        setIsShowingFirstHalf(false); // Show second half after splitDuration
        startSplitToggle(); // Resume the toggle between halves
      }, splitDuration);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [startSplitToggle]
  );

  // Determine which logos to show based on the active index and if first/second half
  const currentLogos =
    active % 4 === 0
      ? applications
      : active % 4 === 1
        ? databases
        : active % 4 === 2
          ? isShowingFirstHalf
            ? files.slice(0, 16)
            : files.slice(16)
          : isShowingFirstHalf
            ? transformations.slice(0, 16)
            : transformations.slice(16);

  return (
    <div className="w-full mx-auto text-center">
      {/* Buttons */}
      <ButtonList items={items} active={active} onButtonClick={handleButtonClick} />
      {/* Slider Wrapper */}
      <div className="scroller z-20 w-full overflow-hidden pb-8 min-h-[335px]">
        <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 min-w-full shrink-0 gap-3 py-2 px-1">
          {currentLogos.map((item, idx) => (
            <li
              className="relative flex flex-col rounded-2xl border shrink-0 p-4 bg-white hover:shadow-md hover:scale-105 transition-transform duration-300"
              key={idx}
            >
              <blockquote>
                <div aria-hidden="true" className="pointer-events-none absolute"></div>
                <Image src={item.image} alt="logos" width={250} height={100} className={cn("size-14 mx-auto", item.className || "")} />
                <div className="mt-3 text-sm h-[30px] flex items-center justify-center">{item.name}</div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

// Setting display name for WorkflowSlider
WorkflowSlider.displayName = "WorkflowSlider";

// Memoized ButtonList component with CSS-based progress animation
const ButtonList = React.memo(({ items, active, onButtonClick }: any) => (
  <div className="max-w-xs sm:max-w-sm md:max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
    {items.map((item: any, index: number) => (
      <button
        key={index}
        className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
        onClick={() => onButtonClick(index)}
      >
        <span
          className={`text-center flex flex-col items-center ${
            active === index ? "" : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
          }`}
        >
          <span className="block text-[12px] xl:text-sm font-medium text-slate-900 mb-2 uppercase">{item.desc}</span>
          <span className="block relative w-full bg-slate-200 h-1 rounded-full overflow-hidden" role="progressbar" aria-valuenow={active === index ? 100 : 0}>
            <span
              className={`absolute inset-0 bg-ivindigo-500 rounded-[inherit] transition-all duration-[5000ms] ease-linear`}
              style={{ width: active === index ? "100%" : "0%" }}
            ></span>
          </span>
        </span>
      </button>
    ))}
  </div>
));

// Setting display name for ButtonList
ButtonList.displayName = "ButtonList";

export default WorkflowSlider;
